import React,{ Component } from 'react';
import QuoteForm from './quoteForm';
import ResultQuote from './ResultQuote';
import {connect} from 'react-redux';
import { getCurrencyCode, submitQuoteAction, resetStateAction, constant } from './actions';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currencies:[],
      ...this.props.resetState()
    }
  }

  getNewQuote = () => {
    this.setState({
      ...this.props.resetState()
    })
  }

  componentDidMount(){
     this.props.getCurrency();  
  }

  onSubmit=params=>{
    this.props.submitQuote(params)
  }

  render(){
    const {     phoneList, currencies, quote, status} = this.props;
    return (
      <div className="main-div">
        <span className="heading">Quick Quote</span>
        <hr/>
        {status=== constant.QUOTE && <QuoteForm 
          currencies={currencies} 
          phoneList={phoneList}
          phoneCode={this.state.phoneCode} 
          setSelectedCurrency={this.setSelectedCurrency}
          onSubmit={this.onSubmit}
          reset={this.state.toReset}/>}
        {status=== constant.RESULT && <ResultQuote getNewQuote={this.getNewQuote} quote={quote} fromCurrencyCode={this.state.fromCurrency} toCurrencyCode={this.state.toCurrency}/>}
      </div>
    );
  }
}

const mapStateToProps = (state,props)=>{
  return {
    quote:state.store.resultQuote,
    resultRates:state.store.resultRates,
    currencies:state.store.currencies || {},
    phoneList: state.store.phoneList || {},
    status: state.store.status
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrency : ()=> dispatch(getCurrencyCode()),
  submitQuote : params=> dispatch(submitQuoteAction(params)),
  resetState : ()=> dispatch(resetStateAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
