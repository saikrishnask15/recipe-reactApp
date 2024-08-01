const RecipeLinesModal = ({isOpen,onClose,children}) => {
    if (!isOpen) return null
    return ( 
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
            <button className="btn" onClick={onClose}>close</button>
            </div>
        </div>
     );
}
 
export default RecipeLinesModal;
// const RecipeLinesModal = ({ingredientLines}) => {
//     return ( 
       
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 {ingredientLines.map((value,key)=>
//                 <div key={key}>{value}</div>)}
//            <button className="btn" >close</button>
//            </div>
//          </div>
//      );
// }
 
// export default RecipeLinesModal;