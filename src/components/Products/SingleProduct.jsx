import { useParams } from 'react-router-dom'
// import styles from './../'
import { useGetProductQuery } from '../../features/api/apiSlice'

const SingleProduct = () => {
  const { id } = useParams()

  const { data } = useGetProductQuery({ id })
  console.log(data)
  return <div>SingleProduct</div>
}

export default SingleProduct
