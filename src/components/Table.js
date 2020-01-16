import React, {forwardRef, useState} from 'react';
import MaterialTable from "material-table";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};

function Table(props) {
    const {name, type, operationName, firstField, secondField, thirdField} = props;

    const [data, setData] = useState({});

    const ipamCoreUrl = "https://fathomless-escarpment-92247.herokuapp.com/";

    function fetchData() {
        fetch(ipamCoreUrl + type + "/" + operationName)
            .then(response => response.json())
            .then(responseJson => setData(responseJson));
    }

    return (
        <div>
            <div style={{maxWidth: "100%"}}>
                <MaterialTable
                    editable={{
                        onRowAdd: newData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    setData(prevState => {
                                        const data = [...prevState];
                                        data.push(newData);
                                        fetch(ipamCoreUrl + type + "/create", {
                                            method: 'POST',
                                            body: JSON.stringify(newData),
                                            headers: {
                                                'Accept': 'application/json, text/plain',
                                                'Content-Type': 'application/json;charset=UTF-8'
                                            }
                                        }).then(response => console.log(response));
                                        return {...prevState, data};
                                    });
                                }, 600);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        setData(prevState => {
                                            const data = [...prevState];
                                            data[data.indexOf(oldData)] = newData;
                                            fetch(ipamCoreUrl + type + "/update", {
                                                method: 'POST',
                                                body: JSON.stringify(newData),
                                                headers: {
                                                    'Accept': 'application/json, text/plain',
                                                    'Content-Type': 'application/json;charset=UTF-8'
                                                }
                                            })
                                                .then((response) => response.status === 200);
                                            return {...prevState, data};
                                        });
                                    }
                                }, 600);
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    setData(prevState => {
                                        const data = [...prevState];
                                        data.splice(data.indexOf(oldData), 1);
                                        fetch(ipamCoreUrl + type + "/delete", {
                                            method: 'DELETE',
                                            body: JSON.stringify(oldData),
                                            headers: {
                                                'Accept': 'application/json, text/plain',
                                                'Content-Type': 'application/json;charset=UTF-8'
                                            }
                                        });
                                        return {...prevState, data};
                                    });
                                }, 600);
                            }),
                    }}
                    icons={tableIcons}
                    columns={[
                        {title: firstField, field: firstField},
                        {title: secondField, field: secondField},
                        {title: thirdField, field: thirdField},
                    ]}
                    data={query =>
                        new Promise((resolve, reject) => {
                            let url = ipamCoreUrl + type + "/" + operationName;
                            fetch(url)
                                .then(response => response.json())
                                .then(result => {
                                    setData(result);
                                    resolve({
                                        data: result,
                                        page: result.page - 1,
                                        totalCount: result.total,
                                    })
                                })
                        })
                    }
                    title={name}
                />
            </div>
        </div>
    );
}

export default Table;
