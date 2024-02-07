import './ItemListContainer.css';
export const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <div className='d-flex justify-content-center mt-5 itemListContainer p-5'>
            <p className='fw-bold h2 text-uppercase text-center '>{greeting}</p>
    </div>
        </div>
    );
}

