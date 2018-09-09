let initialState = {
  container_details : {
    containers : null,
    container_dim : {
      length : null,
      bredth : null,
      height : null
    }
  },
  cases_details : []
};

export default (state = initialState, action) => {
  switch(action.type) {

    case 'SET_CONTAINER':
      let details = action.container_details;
      return {
        ...state,
        container_details : details
      };
    case 'ADD_CASE':
      let detail = {
        cases : null,
        case_id : action.id,
        case_dim : {
          length : null,
          bredth : null,
          height : null
        }
      };
      return ({
        ...state,
        cases_details : [
          ...state.cases_details,
          detail
        ]
      });
    case 'REMOVE_CASE':
      return {
        ...state,
        cases_details : state.cases_details.filter((caseDetail) => caseDetail.case_id !== action.id)
      };
    
    case 'EDIT_CASE':
      return ({
        ...state,
        cases_details : state.cases_details.map((caseDetail) => {
          if (caseDetail.case_id === action.id) {
            return {
              cases : action.cases,
              case_id : action.id,
              case_dim : {
                length : action.length,
                bredth : action.bredth,
                height : action.height
              }
            };
          } else {
            return caseDetail;
          }
        })
      });

    /*
    case 'ADD_VALUE_CASE':
      let detail = {
        cases : action.cases,
        case_id : action.id,
        case_dim : {
          length : action.length,
          bredth : action.bredth,
          height : action.height
        }
      };
      let Cases = action.cases;
      return ({
        ...state,
        cases_details : [
          ...state.cases_details,
          detail
        ]
      });
    */
    
    default:
      return state;
  }
};