import { FETCH_FREE_CASH_FLOW } from '../../actions/types'

function getFreeCashFLow(array){
  for(let i = 0; i < 5; i++){
    let Obj = {}
    Obj["date"] = array[i].date;
    Obj["symbol"] = array[i].symbol;
    Obj["freeCashFlow"] = array[i].freeCashFlow;
    return Obj 
  }
}

// eslint-disable-next-line 
export default async (state = [], action) => {
  switch (action.type) {
     case FETCH_FREE_CASH_FLOW:
      const CashFlow = await getFreeCashFLow(action.payload);
      return CashFlow;
    default:
      return state;
  }
};

//要先搞清楚每一個action.payload要用取得的是什麼資料？