import "./CartPage.css";
import remove from "../../assets/remove.png";
import user from "../../assets/user.webp";
import Table from "../Common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext ";

const CartPage = ({ cart }) => {
  const [subTotal, setSubTotal] = useState(0);
  const user = useContext(UserContext); //userContext 로 UserContext 가져오기

  console.log(user);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    setSubTotal(total);
  }, [cart]);

  // console.log(cart);

  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img
          src={`http://localhost:5000/profile/${user?.profilePic}`}
          alt="user profile"
        />
        <div>
          <p className="user_name">{user?.name}</p>{" "}
          {/*user?.name 의 ?는 이름이나 이메일이 없을 경우 오류 발생을 막아줄려고 사용 */}
          <p className="user_email">{user?.email}</p>
        </div>
      </div>

      <Table headings={["상품", "가격", "구매수량", "총 금액", "상품삭제"]}>
        <tbody>
          {cart.map(({ product, quantity }) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.price.toLocaleString("ko-KR")} 원</td>
              <td className="align_center table_quantity_input">
                <QuantityInput quantity={quantity} stock={product.stock} />
              </td>
              <td>{(quantity * product.price).toLocaleString("ko-KR")} 원</td>
              <td>
                <img
                  src={remove}
                  alt="remove icon"
                  className="cart_remove_icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <table className="cart_bill">
        <tbody>
          <tr>
            <td>총 금액</td>
            <td>{subTotal.toLocaleString("ko-KR")} 원</td>
          </tr>
          <tr>
            <td>배송비</td>
            <td>3,000 원</td>
          </tr>
          <tr className="cart_bill_final">
            <td>결재금액</td>
            <td>{(subTotal + 3000).toLocaleString("ko-KR")} 원</td>
          </tr>
        </tbody>
      </table>

      <button className="search_button checkout_button">결재하기</button>
    </section>
  );
};

export default CartPage;
