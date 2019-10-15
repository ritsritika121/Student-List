import axios from 'axios';


export const FetchList = () => async (dispatch) => {
    const response = await axios.get('http://www.mocky.io/v2/5c6ceec53700001d0ffa30c2');
    dispatch({ type: 'FETCH_LIST', payload: Object.values(response.data) })
};

export const Show = (index) => {
     return {
         type: 'SHOW_DETAILS',
         payload: index
     }
}


export const AddNewStudent = (Name,Group,Class, rollNo, Marks_s1, Marks_s2, Marks_s3) => {

    return {
        type:'NEW_STUDENT',
        payload:{
            name:Name,
            group: Group,
            class: Class,
            rollNo: rollNo,
            marks: {
                s1: Marks_s1,
                s2: Marks_s2,
                s3: Marks_s3
            }
        } 
    };
};