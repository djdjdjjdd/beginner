import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const  [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const handleClose = () =>  {
    setIsShowModalAddNew(false);
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
    </>
  );
};

export default TableUsers;