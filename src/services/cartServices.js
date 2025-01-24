import apiClient from "../utils/api-client";

//제품 id 와 수량을 DB에 저장
export function addToCartAPI(id, quantity) {
  return apiClient.post(`/cart/${id}`, { quantity });
}

//카트정보를 가져오는 함수
export async function getCartAPI() {
  return await apiClient.get("/cart");
}

//상품 삭제
export function removeFromCartAPI(id) {
  return apiClient.patch(`/cart/remove/${id}`);
}

//장바구니 상품 증가 감소(increase(+),decrease(-))
export function increaseProductAPI(id) {
  return apiClient.patch(`/cart/increase/${id}`);
}

export function decreaseProductAPI(id) {
  return apiClient.patch(`/cart/decrease/${id}`);
}
