import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const ProductLoading = () => {
    return (
        <>
            <div className='item-header-skeleton'>
                <Skeleton height={40} width={120} />
                <div className='filter-dropdown-skeleton'>
                    <Skeleton height={40} width={120} />
                    <Skeleton height={40} width={120} />
                    <Skeleton height={40} width={120} />
                    <Skeleton height={40} width={120} />
                    <Skeleton height={40} width={120} />
                </div>
            </div>
            <div className="item-container-skeleton">

                <Skeleton height={300} width={300} />
                <Skeleton height={300} width={300} />
                <Skeleton height={300} width={300} />
                <Skeleton height={300} width={300} />
                <Skeleton height={300} width={300} />
                <Skeleton height={300} width={300} />

            </div>



        </>
    )
}

export const ShowProductLoading = () => {
    return (
        <>
            <div className="product-skeleton">
                <div className='image-skeleton'>
                    <Skeleton width={400} height={400} />
                </div>
                <div className='details-skeleton'>
                    <Skeleton width={200} height={55} />
                    <Skeleton width={500} height={120} />
                    <Skeleton width={100} height={50} />
                    <Skeleton width={500} height={120} />
                    <Skeleton width={100} height={50} />
                    <div className='button-skeleton'>
                        <Skeleton height={50} width={160} />
                        <Skeleton height={50} width={160} />
                    </div>
                </div>

            </div>
        </>
    )
}


export const CartLoading = () => {
    return (
        <>
            Loading...
        </>
    )
}

export const LoginLoading = () => {
    return (
        <>
            <div className="login-skeleton-container">
                <div className='login-skeleton-wrapper'>
                    <Skeleton height={20} width={70} />
                    <Skeleton height={20} width={70} />
                    <Skeleton height={20} width={70} />
                    <Skeleton height={20} width={70} />
                    <Skeleton height={20} width={70} />
                </div>


            </div>
        </>
    )
}