import React, {forwardRef, useEffect, useState} from 'react';
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

function NetworkHook(props) {
    const [data, setData] = useState({});

    function fetchData() {
        fetch("https://fathomless-escarpment-92247.herokuapp.com/network/getNetworks")
            .then(response => response.json())
            .then(responseJson => setData(responseJson));
        // const res = fetch("https://fathomless-escarpment-92247.herokuapp.com/network/getNetworks");
        // res.json().then(json => {
        // json.map(element => console.log(element));
        // setData(json);
        // });
    }

    function renderData(list) {
        if (Object.entries(list).length === 0 && list.constructor === Object) {
            return {
                ip: "",
                addressMask: "",
                description: "",
            }
        } else {
            const result = [];
            list.map(element => {
                result.push({
                    ip: element.ip,
                    addressMask: element.addressMask,
                    description: element.description,
                });
            });
            return result;

        }
    }

    useEffect(() => {
        fetchData()
    }, []);

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
                                        const data = [...prevState.data];
                                        data.push(newData);
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
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            //TODO update on BE
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
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return {...prevState, data};
                                    });
                                }, 600);
                            }),
                    }}
                    icons={tableIcons}
                    columns={[
                        {title: "Ip", field: "ip"},
                        {title: "Address Mask", field: "addressMask"},
                        {title: "Description", field: "description"},
                    ]}
                    data={query =>
                        new Promise((resolve, reject) => {
                            let url = "https://fathomless-escarpment-92247.herokuapp.com/network/getNetworks";
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
                    title="Networks"
                />
            </div>
        </div>
    );
}

export default NetworkHook;
