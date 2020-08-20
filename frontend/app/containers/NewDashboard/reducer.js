/*
 *
 * Dashboard reducer
 *
 */
import produce from "immer";
import { DEFAULT_ACTION, FETCH_TABLEDATA, SAVE_TABLEDATA, SAVE_SCENARIOKASSANDRA , SAVE_SCENARIO, TOGGLE_TABLEDATA, GET_USERINFO} from "./constants";
export const initialState = {
    tableData:[],
    TableParam:{},
    selectedTableData:[],
    userID:'',
    ScenarioInfo:{
        userid : "3",
        user_name : "admin3",
        scenario_id : "3",
        scenario_name : "test",
        datetime:"",
        oosrisk : "20",
        lowrisk : "40",
        medrisk : "60",
        hsrisk : "80",
        scenario_details : {
            bar_graph : [
                {name: "OOS Risk", value: 556 },
                {name: "Low Risk", value: 120 },
                {name: "Medium Risk", value: 30 },
                {name: "High Stock Risk", value: 480 }
            ],
            product_info: [ ]
        }
    }

};
/* eslint-disable default-case, no-param-reassign */
const newDashboardReducer = (state = initialState, action) =>
    produce(state,  draft => {
        switch (action.type) {
            case DEFAULT_ACTION:
                break;
            case FETCH_TABLEDATA:
                draft.tableData = [];
                draft.TableParam = action.dataParam;
                break;
            case SAVE_TABLEDATA:
                draft.tableData = action.data;
                break;
            case SAVE_SCENARIOKASSANDRA:
                draft.ScenarioInfo.hsrisk =  draft.TableParam.High;
                draft.ScenarioInfo.lowrisk =draft.TableParam.Low;
                draft.ScenarioInfo.user_name = draft.userID.userID;
                draft.ScenarioInfo.scenario_details.product_info = draft.selectedTableData;
                draft.ScenarioInfo.scenario_name = action.data;
                draft.ScenarioInfo.datetime = new Date();
                break;
            case SAVE_SCENARIO:
                break;
            case TOGGLE_TABLEDATA:
                if(action.data.isSelect){
                    const obj = {
                        real_item: action.data.row.real_item,
                        zrep_item: action.data.row.zrep_item,
                        u_brandflag: action.data.row.u_brandflag,
                        descr: action.data.row.descr,
                        distinct_warehouses: action.data.row.distinct_warehouses,
                        projected_inventory: action.data.row.projected_inventory,
                        qi: parseInt(action.data.row.qi) ,
                        blocked: parseInt(action.data.row.blocked)
                    }
                    draft.selectedTableData.push(obj)
                    console.log(draft.selectedTableData);
                }else{

                 draft.selectedTableData =   draft.selectedTableData.filter((item)=> item.real_item!== action.data.row.real_item && item.zrep_item!== action.data.row.zrep_item && item.u_brandflag!== action.data.row.u_brandflag && item.distinct_warehouses!== action.data.row.distinct_warehouses )
                console.log(draft.selectedTableData);
                
                }

                break;
            case GET_USERINFO:
                draft.userID = action.data;
                break;
        }
    });
export default newDashboardReducer;
