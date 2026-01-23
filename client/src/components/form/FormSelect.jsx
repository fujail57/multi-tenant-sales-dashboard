// import React from "react";
// import { useForm } from "react-hook-form";

// export const FormSelect = ({ label, name, option = [] }) => {
//   const { register } = useForm();
//   return (
//     <div>
//       {label && (
//         <label className="block mb-1 text-sm font-medium text-gray-950">
//           {label}
//         </label>
//       )}

//       <select {...register(`${name}`)}>
//         {/* <option value="new">New</option>
//         <option value="pending">Pending</option>
//         <option value="completed">Completed</option> */}

//             {option.map((option)=>{
//                 <option value={option.value}>{option.value}</option>
               
//             })}

//       </select>
//     </div>
//   );
// };
