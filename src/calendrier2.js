import React from 'react';
import { ReactAgenda , ReactAgendaCtrl , guid ,  Modal } from 'react-agenda';
import axios from 'axios';
import Score from './api2';
import Score_undone from './api4.js';
import Popup from './popup';

require('moment/locale/fr.js'); // this is important for traduction purpose
 
var colors= {
  'color-1':"red" ,
  "color-2":"yellow" ,
  "color-3":"red"
}
 
var now = new Date();
export default class Agenda extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://auth.test/api_calendar`)
      .then(res => {
        const users = res.data;
        const items = [];
        users.map((user) => { 
          items.push({
          _id           : guid(),
          name          : `${user.prenom} ${user.nom}`,
          startDateTime : new Date(user.date.date),
          endDateTime   : new Date(user.end.date),
          classes       : 'color-3 color-2'
          })
        });
        this.setState({ items });
      })
  }

  constructor(props){
  super(props);
    this.state = {
      items:[],
      selected:[],
      cellHeight:30,
      showModal:false,
      locale:"fr",
      rowsPerHour:2,
      numberOfDays:7,
      startDate: new Date()
    }
    this.handleCellSelection = this.handleCellSelection.bind(this)
    this.handleItemEdit = this.handleItemEdit.bind(this)
    this.handleRangeSelection = this.handleRangeSelection.bind(this)
  }
 
handleCellSelection(item){
  console.log('handleCellSelection',item)
}
handleItemEdit(item){
  console.log('handleItemEdit', item)
}
handleRangeSelection(item){
  console.log('handleRangeSelection', item)
}
  render() {
    return (
      <div>
      <div className="size">
        <ReactAgenda
          minDate={now}
          maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
          disablePrevButton={false}
          startDate={this.state.startDate}
          cellHeight={this.state.cellHeight}
          locale={this.state.locale}
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          autoScale={false}
          fixedHeader={true}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onRangeSelection={this.handleRangeSelection.bind(this)}/>
      </div>
      <div className="score">
        <Score />
      </div>
      <br/><br/>
      <div className="score">
        <Score_undone />
      </div>
      <br/><br/>
      <div className="form">
        <Popup />
      </div>
      </div>
    );
  }
}