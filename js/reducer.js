let redux = require('redux');
let actions = require('./actionTypes.js');

let initialCards = {
   1: {id: '1', name:'hello'},
   2: {id: '2', name:'hello'},
   3: {id: '3', name:'hello'},
   4: {id: '4', name:'hello'},
   5: {id: '5', name:'hello'},
   6: {id: '6', name:'hello'},
   7: {id: '7', name:'hello'},
   8: {id: '8', name:'hello'},
   9: {id: '9', name:'hello'}
};
let initialZones = {
   10: {id: '10', name:'deck', type:'deck', pos:{x: 100, y: 400}, cards: ['1', '2', '3', '4']},
   11: {id: '11', name:'hand', type:'hand', pos:{x: 400, y: 450}, cards: ['5', '6', '7', '8', '9']}
}

let cards = (state = initialCards, action) => {
    return state;
};
let zones = (state = initialZones, action) => {
   switch(action.type) {
      case actions.MOVE:
         console.log(action);
         let newState = Object.assign({},
            state, 
            Object.keys(state).reduce((pre,zoneId) => {
               let zone = state[zoneId];
               console.log(zoneId, action.target, zoneId === action.target);
               if(zoneId !== action.target) {
                  pre[zoneId] = Object.assign({}, zone, {cards: zone.cards.filter(id => id !== action.id)});
               } else {
                  pre[zoneId] = Object.assign({}, zone, {cards: zone.cards.concat(action.id)});
               }
               return pre;
            }, {})
         );
         console.log(newState);
         return newState;
   }
   return state;
};

let reducer = redux.combineReducers({
   cards, zones
});


module.exports = reducer;