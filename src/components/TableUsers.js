import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import ModalConfirm from './ModalConfirm';
import _ from "lodash"
const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const  [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const  [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState({});
  const [dataUserDelete, setDataUserDelete] = useState({});

  const [isShowModalDelete, setIsShowModalDelete] = useState(false)
  const handleClose = () =>  {
    setIsShowModalAddNew(false);
    setIsShowModalEdit(false);
    setIsShowModalDelete(false);
  }
  useEffect(() => {
    getUsers(1);
  }, []);

  const getUsers = async (page) => {
    let res = await fetchAllUser(page);
    console.log('>>>', res.data);

    if (res && res.data && res.data.data) {
      console.log(res);
      setListUsers(res.data.data);
      setTotalPages(res.total_pages)
      setTotalUsers(res.total)
    }
  };

  const handlePageClick = (event) => {
    console.log('event lib', event);
    getUsers(+event.selected + 1);
  };
  const handleUpdateTable = (user ) => {
    setListUsers([user, ...listUsers]);
  };

  const handleEditUser = (user) => {
   
    setDataUserEdit(user);
    setIsShowModalEdit(true)
  };

  const handleDeleteUser = (user) => {
    setIsShowModalDelete(true);
    setDataUserDelete(user)
  }
  const handleEditUserFromModal = (user) =>  {
    let cloneListUsers = _.cloneDeep(listUsers)
    let index = listUsers.findIndex(item => item.id === user.id)
    cloneListUsers[index].first_name = user.first_name
    console.log(listUsers, cloneListUsers);
    console.log(">>>",index)
  }

  const handleDeleteUserFromModal = (user) => { 
    let cloneListUsers = _.cloneDeep(listUsers)
    cloneListUsers = cloneListUsers.filter(item => item.id === user.id)
    
    setListUsers(cloneListUsers)
  }
  return (
    <>
     <div className='my-3 add-new'>
             <span><b>
                listUsers
              </b></span>
              <button className='btn btn-success'
                onClick={() => setIsShowModalAddNew(true)}
              >add new users </button>
            </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users - ${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <button class='btn btn-warning mx-3'
                            onClick={() => handleEditUser(item)}
                            >
                      Edit
                    </button>
                    <button class='btn btn-danger'
                            onClick={() => handleDeleteUser(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
       <ModalAddNew
              show = {isShowModalAddNew}
              handleClose ={handleClose}
              handleUpdateTable = {handleUpdateTable}

            />
        <ModalEditUser
            show = {isShowModalEdit}
            dataUserEdit = {dataUserEdit}
            handleClose ={handleClose}
            handleEditUserFromModal = {handleEditUserFromModal}
        />  
        <ModalConfirm
            show = {isShowModalDelete}
            handleClose = {handleClose}
            dataUserDelete = {dataUserDelete}
            handleDeleteUserFromModal = {handleDeleteUserFromModal}
        />  
    </>
  );
};

export default TableUsers;