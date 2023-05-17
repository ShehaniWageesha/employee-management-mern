import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routes/route-paths';

const Employee = (props) => (
  <tr>
    <td>{props.employee.empName}</td>
    <td>{props.employee.empId}</td>
    <td>{props.employee.designation}</td>
    <td>{props.employee.empType}</td>
    <td>{props.employee.experience}</td>
    <td>
      <Link to={`${RoutePaths.edit}${props.employee._id}`}>edit</Link>| |
      <a
        href="#"
        onClick={() => {
          props.deleteEmployee(props.employee._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

Employee.propTypes = {
  deleteEmployee: PropTypes.func,
  employee: PropTypes.shape({
    _id: PropTypes.any,
    date: PropTypes.shape({
      substring: PropTypes.date
    }),
    empName: PropTypes.string,
    empId: PropTypes.string,
    designation: PropTypes.string,
    empType: PropTypes.string,
    experience: PropTypes.string
  })
};
export default Employee;
