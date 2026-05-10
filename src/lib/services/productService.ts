import apiClient from '@/lib/api';
import { Product } from '@/types';
 
export const productService = {
  async getAll(filters?: { portee?: string; ville?: string; search?: string }) {
    const response = await apiClient.get<Product[]>('/products', { params: filters });
    return response;
  },
 
  async getById(id: string) {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return response;
  },
 
  async create(product: Partial<Product>) {
    const response = await apiClient.post<Product>('/products', product);
    return response;
  },
 
  async update(id: string, product: Partial<Product>) {
    const response = await apiClient.put<Product>(`/products/${id}`, product);
    return response;
  },
 
  async delete(id: string) {
    await apiClient.delete<void>(`/products/${id}`);
  },
};
