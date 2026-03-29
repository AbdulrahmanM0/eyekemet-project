import handleCart from '@/api/cart/cart';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

export const cart = createAsyncThunk(
  'cart/cart',
  async ({ formData, method }, thunkAPI) => {
    try {
      const res = await handleCart({ method, formData })
      if (method == "add") {
        if (res?.status === 401) {
          thunkAPI.dispatch(authWarn());
          toast.warn("Please Login First")
          return;
        }
        toast.success("added successfully");
      }
      if (method == "remove") {
        toast.success("removed successfully");
      }
      if (method == "clear") {
        toast.success("cleared successfully");
        thunkAPI.dispatch(toggle());
      }
      return res.data;
    } catch (err) {
      toast.error(err?.response?.data);
      return thunkAPI.rejectWithValue(err.response?.data || 'Error adding to cart');
    }
  }
);

const initialState = {
  open: false,
  cartItems: [],
  loading: false,
  error: null,
  subTotal: 0,
  shipping: 0,
  discount: 0,
  total: 0,
  tax: 0,
  extraction_id: '',
  cart: {},
  authwarntoggle: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open
    },
    extraction_id: (state, action) => {
      state.extraction_id = action.payload
    },
    authWarn: (state, action) => {
      state.authwarntoggle = (action.payload || !state.authwarntoggle)
    },

    resetCart: (state) => {
      state.cartItems = [];
      state.subTotal = 0;
      state.shipping = 0;
      state.discount = 0;
      state.total = 0;
      state.tax = 0;
      state.cart = {};
      state.extraction_id = '';
    }
  },


  extraReducers: (builder) => {
    builder
      .addCase(cart.pending, (state) => {
        state.loading = true
      })
      .addCase(cart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload?.items || [];
        state.total = action.payload?.cart?.total;
        state.subTotal = action.payload?.cart?.subtotal;
        state.tax = action.payload?.cart?.tax;
        state.discount = action.payload?.cart?.discount;
        state.cart = action.payload?.cart;
      })
      .addCase(cart.rejected, (state, action) => {
        state.loading = false
        // state.error = action.payload
      })
  },
})

export const { toggle, extraction_id, authWarn ,resetCart } = cartSlice.actions
export default cartSlice.reducer