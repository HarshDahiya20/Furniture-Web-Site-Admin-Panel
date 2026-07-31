import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './component/pages/auth/Login'
import MainLayout from './component/common/MainLayout'
import Dashboard from './component/pages/dashboard/Dashboard'
import ViewUser from './component/pages/users/ViewUser'
import ContectEnquiry from './component/pages/enquiry/ContectEnquiry'
import Newsletter from './component/pages/enquiry/Newsletter'
import ViewColor from './component/pages/colors/ViewColor'
import AddColor from './component/pages/colors/AddColor'
import AddMaterial from './component/pages/materials/AddMaterial'
import ViewMaterial from './component/pages/materials/ViewMaterial'
import AddCategory from './component/pages/category/AddCategory'
import ViewCategory from './component/pages/category/ViewCategory'
import AddSubCategory from './component/pages/subCategory/AddSubCategory'
import ViewSubCategory from './component/pages/subCategory/ViewSubCategory'
import AddSubSubCategory from './component/pages/subSubCategory/AddSubSubCategory'
import ViewSubSubCategory from './component/pages/subSubCategory/ViewSubSubCategory'
import ViewProduct from './component/pages/product/ViewProduct'
import AddProduct from './component/pages/product/AddProduct'
import AddWhyChooseUs from './component/pages/why-choose-us/AddWhyChooseUs'
import ViewWhyChooseUs from './component/pages/why-choose-us/ViewWhyChooseUs'
import Orders from './component/pages/orders/Orders'
import AddSliders from './component/pages/sliders/AddSliders'
import ViewSliders from './component/pages/sliders/ViewSliders'
import AddCountry from './component/pages/country/AddCountry'
import ViewCountry from './component/pages/country/ViewCountry'
import ViewTestimonials from './component/pages/testimonials/ViewTestimonials'
import AddTestimonials from './component/pages/testimonials/AddTestimonials'
import AddFaqs from './component/pages/faqs/AddFaqs'
import ViewFaqs from './component/pages/faqs/ViewFaqs'
import ProductDetail from './component/pages/product/ProductDetail'
import CompanyProfile from './component/pages/componyProfile/ComponyProfile'
import Profile from './component/pages/profile/Profile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>

            <Route path='/componyprofile' element={<CompanyProfile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/user' element={<ViewUser/>}/>
            <Route path='enquiry'>
              <Route path='contact' element={<ContectEnquiry/>} />
              <Route path='newsletter' element={<Newsletter/>} />
            </Route>
            <Route path='color'>
              <Route path='add' element={<AddColor/>} />
              <Route path='add/:id' element={<AddColor/>} />
              <Route path='view' element={<ViewColor/>} />
            </Route>
            <Route path='material'>
              <Route path='add' element={<AddMaterial/>} />
              <Route path='add/:id' element={<AddMaterial/>} />
              <Route path='view' element={<ViewMaterial/>} />
            </Route>
            <Route path='category'>
              <Route path='add' element={<AddCategory/>} />
              <Route path='add/:id' element={<AddCategory/>} />
              <Route path='view' element={<ViewCategory/>} />
            </Route>
            <Route path='sub-category'>
              <Route path='add' element={<AddSubCategory/>} />
              <Route path='add/:id' element={<AddSubCategory/>} />
              <Route path='view' element={<ViewSubCategory/>} />
            </Route>
            <Route path='sub-sub-category'>
              <Route path='add' element={<AddSubSubCategory/>} />
              <Route path='add/:id' element={<AddSubSubCategory/>} />
              <Route path='view' element={<ViewSubSubCategory/>} />
            </Route>
            <Route path='product'>
              <Route path='add/:id?' element={<AddProduct/>} />
              <Route path='view' element={<ViewProduct/>} />
              <Route path='view/:slug' element={<ProductDetail/>} />
            </Route>
            <Route path='why-choose-us'>
              <Route path='add' element={<AddWhyChooseUs/>}/>
              <Route path='add/:id' element={<AddWhyChooseUs/>} />
              <Route path='view' element={<ViewWhyChooseUs/>} />
            </Route>
            <Route path='orders'>
              <Route path='orders' element={<Orders/>}/>
            </Route>
            <Route path='slider'>
              <Route path='add' element={<AddSliders/>}/>
              <Route path='add/:id' element={<AddSliders/>} />
              <Route path='view' element={<ViewSliders/>} />
            </Route>\
            <Route path='country'>
              <Route path='add' element={<AddCountry/>}/>
              <Route path='add/:id' element={<AddCountry/>} />
              <Route path='view' element={<ViewCountry/>} />
            </Route>
            <Route path='testimonial'>
              <Route path='add' element={<AddTestimonials/>}/>
              <Route path='add/:id' element={<AddTestimonials/>} />
              <Route path='view' element={<ViewTestimonials/>} />
            </Route>
            <Route path='faqs'>
              <Route path='add' element={<AddFaqs/>}/>
              <Route path='add/:id' element={<AddFaqs/>} />
              <Route path='view' element={<ViewFaqs/>} />
            </Route>

            
            

        </Route>

        <Route path='/' element={<Login/>}/>
        
      </Routes>   
    </BrowserRouter>
  </StrictMode>,
)
