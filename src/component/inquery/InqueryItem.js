import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ConfirmModal from "../utility/ConfirmModal";
import { deleteInquery } from "./inquerySlice";

function InqueryItem(props) {
   
    console.log(props.id);

    const [isModalOpen,setModalOpen] = useState(false)
    const dispatch = useDispatch();

    function deleteHandler(){
        setModalOpen(true);
    }

    // function backdropHandler(){
    //     setModalOpen(false);
    // }

    function cancelHandler(){
        setModalOpen(false);
    }

    function confirmHandler(){
        dispatch(deleteInquery({inqueryId:props.id})).unwrap()

        setModalOpen(false)
    }

    return (

        <tr id="data_table tr">
            <td> {props.id}</td>
                <td>{props.lawyerName}</td>
                <td>{props.phoneNo}</td>
                <td>{props.description}</td>
                <td className="text-center">
                  
                    <Link onClick={deleteHandler}>
                    <i className='fas fa-trash text-danger mx-3'></i>
                    </Link>
                    <Link to={`/appointment/create/${props.id}`}>
                    <button className="btn btn-light mx-2"><i className='fas fa-paste text-primary'></i>Appointment</button>
                    </Link>
                    {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
                   
                </td>
                
        </tr>
            
            // <div className="col-lg-4 col-md-6">
                
            //         <div className="service-item bg-primary rounded d-flex flex-column align-items-center justify-content-center text-center">
                        // {/* <div className="service-icon mb-4">
                        // <i className="fa-solid fa-user"></i>
                        // </div> */}
                // <h6 className="mb-3">Id: {props.id}</h6>
                // <h4 className="mb-3">Lawyer: {props.lawyerName}</h4>
                // <h6 className="mb-3">User PhoneNo: {props.phoneNo}</h6>
                // <p className="m-0">{props.description}</p>
                // <div className="my-3">
                //     <Link to={`/inquery/edit/${props.id}`}>
                //         <button className="btn btn-success mx-3">Update</button>
                //     </Link>
                //     <Link onClick={deleteHandler}>
                //         <button className="btn btn-danger mx-3">
                //             Delete
                //         </button>
                //     </Link>
                //     {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
                //     {/* {isModalOpen && <Backdrop onBackdrop={backdropHandler}/>}  */}
                // </div>
                // <a className="btn btn-lg btn-primary rounded-pill">
                //     <i className="bi bi-arrow-right"></i>
                // </a>
            //         </div>
             
            // </div>


    );
}
export default InqueryItem;