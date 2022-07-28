import {theme,darkTheme} from "../../utils/theme";



const lightThemeBackground = "#FFFFFF";
const darkThemeBackground =  "#000000";

const secondLightThemeBackground = "#EEEEEE";
const secondDarkThemeBackground = "#373737";

const lightContrastColor = "#000000";
const darkContrastColor = "#FFFFFF";


const initialState = {
    dark:false,
    backgroundColor:lightThemeBackground,
    secondBackgroundColor:secondLightThemeBackground,
    contrastColor:lightContrastColor,
};


function addReducer(state=initialState,action){
    
    if(action.type==="TOGGLE"){
        if(state.dark===false){
            return{
                ...state,
                dark:true,
                backgroundColor:darkThemeBackground,
                secondBackgroundColor:secondDarkThemeBackground,
                contrastColor:darkContrastColor,
            }    
        }
        else{
            return{
                ...state,
                dark:false,
                backgroundColor:lightThemeBackground,
                secondBackgroundColor:secondLightThemeBackground,
                contrastColor:lightContrastColor,
            }
        }
    }
    
    return state;
}


const mapStateToProps = (state) => state

export {addReducer , mapStateToProps};