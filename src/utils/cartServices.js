import apiClient from "../utils/api-client";

//제품 id 와 수량을 DB에 저장
export function addToCartAPI(id, quantity) {
  return apiClient.post(`/cart/${id}`, { quantity });
}
