(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{1671:function(e,t,n){Promise.resolve().then(n.bind(n,9779))},9779:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var l=n(9268),a=n(8707),o=n(1483);function i(e){let{data:t,selected:n=[],onClick:a}=e;return t&&t.length?(0,l.jsx)("div",{className:"mt-3 flex flex-wrap items-center gap-1",children:t.map(e=>(0,l.jsx)("label",{onClick:()=>a(e),className:"cursor-pointer ".concat(n&&n.length&&-1!==n.map(e=>e.id).indexOf(e.id)?"bg-black":""),children:(0,l.jsx)("span",{className:"rounded-lg border border-black px-6 py-2 font-bold ".concat(n&&n.length&&-1!==n.map(e=>e.id).indexOf(e.id)?"text-white":""),children:e.label})},e.id))}):null}var r=n(156),c=n(6304),s=n(5579),d=n(4779),u=n(8147),p=n(1313),m=n(4202),h=n(6008),f=n(6006),y=n(474);let g=(0,p.ZF)(u.qe),b=(0,m.cF)(g,u.mO),x=e=>{let t=Date.now(),n=Math.random().toString(36).substring(2,12);return"".concat(e.name,"-").concat(t,"-").concat(n)};async function w(e){let t=x(e),n=(0,m.iH)(b,"ecommerce/".concat(t)),l=(0,m.B0)(n,e);return new Promise((e,t)=>{l.on("state_changed",e=>{},e=>{console.log(e),t(e)},()=>{(0,m.Jt)(l.snapshot.ref).then(t=>e(t)).catch(e=>t(e))})})}let v={name:"",price:0,description:"",category:"men",sizes:[],deliveryInfo:"",onSale:"no",imageUrl:"",priceDrop:0};function j(){let[e,t]=(0,f.useState)(v),{componentLevelLoader:n,setComponentLevelLoader:p,currentUpdatedProduct:m,setCurrentUpdatedProduct:g}=(0,f.useContext)(s.GlobalContext);console.log(m);let b=(0,h.useRouter)();async function x(n){let l=await w(n.target.files[0]);""!==l&&t({...e,imageUrl:l})}async function j(){p({loading:!0,id:""});let n=null!==m?await (0,d.Tw)(e):await (0,d.xg)(e);console.log(n),n.success?(p({loading:!1,id:""}),y.Am.success(n.message,{position:y.Am.POSITION.TOP_RIGHT}),t(v),g(null),setTimeout(()=>{b.push("/admin-view/all-products")},1e3)):(y.Am.error(n.message,{position:y.Am.POSITION.TOP_RIGHT}),p({loading:!1,id:""}),t(v))}return(0,f.useEffect)(()=>{null!==m&&t(m)},[m]),console.log(e),(0,l.jsxs)("div",{className:"w-full mt-5 mr-0 mb-0 ml-0 relative",children:[(0,l.jsx)("div",{className:"flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative",children:(0,l.jsxs)("div",{className:"w-full mt-6 mr-0 mb-0 ml-0 space-y-8",children:[(0,l.jsx)("input",{accept:"image/*",max:"1000000",type:"file",onChange:x}),(0,l.jsxs)("div",{className:"flex gap-2 flex-col",children:[(0,l.jsx)("label",{children:"Available sizes"}),(0,l.jsx)(i,{selected:e.sizes,onClick:function(n){let l=[...e.sizes],a=l.findIndex(e=>e.id===n.id);-1===a?l.push(n):l=l.filter(e=>e.id!==n.id),t({...e,sizes:l})},data:u.jJ})]}),u.d2.map(n=>"input"===n.componentType?(0,l.jsx)(a.Z,{type:n.type,placeholder:n.placeholder,label:n.label,value:e[n.id],onChange:l=>{t({...e,[n.id]:l.target.value})}}):"select"===n.componentType?(0,l.jsx)(o.Z,{label:n.label,options:n.options,value:e[n.id],onChange:l=>{t({...e,[n.id]:l.target.value})}}):null),(0,l.jsx)("button",{onClick:j,className:"inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking-wide",children:n&&n.loading?(0,l.jsx)(r.Z,{text:null!==m?"Updating Product":"Adding Product",color:"#ffffff",loading:n&&n.loading}):null!==m?"Update Product":"Add Product"})]})}),(0,l.jsx)(c.Z,{})]})}},8707:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var l=n(9268);function a(e){let{label:t,placeholder:n,onChange:a,value:o,type:i}=e;return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("p",{className:" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white",children:t}),(0,l.jsx)("input",{placeholder:n,type:i||"text",value:o,onChange:a,className:"border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"})]})}},1483:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var l=n(9268);function a(e){let{label:t,value:n,onChange:a,options:o=[]}=e;return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("p",{className:" pt-0 pr-2 absolute pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white",children:t}),(0,l.jsx)("select",{value:n,onChange:a,className:"border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md",children:o&&o.length?o.map(e=>(0,l.jsx)("option",{id:e.id,value:e.id,children:e.label},e.id)):(0,l.jsx)("option",{id:"",value:"",children:"Select"})})]})}},156:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var l=n(9268),a=n(2120);function o(e){let{text:t,color:n,loading:o,size:i}=e;return(0,l.jsxs)("span",{className:"flex gap-1 items-center",children:[t,(0,l.jsx)(a.Z,{color:n,loading:o,size:i||10,"data-testid":"loader"})]})}},6304:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var l=n(9268),a=n(474);function o(){return(0,l.jsx)(a.Ix,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",rtl:!1})}n(2657)},5579:function(e,t,n){"use strict";n.r(t),n.d(t,{GlobalContext:function(){return r},default:function(){return u},initialCheckoutFormData:function(){return c}});var l=n(9268),a=n(1712),o=n(6008),i=n(6006);let r=(0,i.createContext)(null),c={shippingAddress:{},paymentMethod:"",totalPrice:0,isPaid:!1,paidAt:new Date,isProcessing:!0},s=["cart","checkout","account","orders","admin-view"],d=["/admin-view","/admin-view/add-product","/admin-view/all-products"];function u(e){let{children:t}=e,[n,u]=(0,i.useState)(!1),[p,m]=(0,i.useState)(!0),[h,f]=(0,i.useState)({loading:!1,id:""}),[y,g]=(0,i.useState)(null),[b,x]=(0,i.useState)(null),[w,v]=(0,i.useState)(null),[j,T]=(0,i.useState)(!1),[N,S]=(0,i.useState)([]),[k,E]=(0,i.useState)([]),[P,C]=(0,i.useState)({fullName:"",city:"",country:"",postalCode:"",address:""}),[O,I]=(0,i.useState)(c),[A,Z]=(0,i.useState)([]),[z,D]=(0,i.useState)(null),[G,J]=(0,i.useState)([]),_=(0,o.useRouter)(),B=(0,o.usePathname)();return(0,i.useEffect)(()=>{if(void 0!==a.Z.get("token")){g(!0);let e=JSON.parse(localStorage.getItem("user"))||{},t=JSON.parse(localStorage.getItem("cartItems"))||[];x(e),S(t)}else g(!1),x({})},[a.Z]),(0,i.useEffect)(()=>{"/register"!==B&&!B.includes("product")&&"/"!==B&&b&&0===Object.keys(b).length&&s.includes(B)>-1&&_.push("/login")},[b,B]),(0,i.useEffect)(()=>{null!==b&&b&&Object.keys(b).length>0&&(null==b?void 0:b.role)!=="admin"&&d.indexOf(B)>-1&&_.push("/unauthorized-page")},[b,B]),(0,l.jsx)(r.Provider,{value:{showNavModal:n,setShowNavModal:u,pageLevelLoader:p,setPageLevelLoader:m,isAuthUser:y,setIsAuthUser:g,user:b,setUser:x,componentLevelLoader:h,setComponentLevelLoader:f,currentUpdatedProduct:w,setCurrentUpdatedProduct:v,showCartModal:j,setShowCartModal:T,cartItems:N,setCartItems:S,addresses:k,setAddresses:E,addressFormData:P,setAddressFormData:C,checkoutFormData:O,setCheckoutFormData:I,allOrdersForUser:A,setAllOrdersForUser:Z,orderDetails:z,setOrderDetails:D,allOrdersForAllUsers:G,setAllOrdersForAllUsers:J},children:t})}},4779:function(e,t,n){"use strict";n.d(t,{Tw:function(){return i},ak:function(){return r},c0:function(){return o},xg:function(){return a}});var l=n(1712);let a=async e=>{try{let t=await fetch("/api/admin/add-product",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(l.Z.get("token"))},body:JSON.stringify(e)}),n=await t.json();return n}catch(e){console.log(e)}},o=async()=>{try{let e=await fetch("http://localhost:3000/api/admin/all-products",{method:"GET",cache:"no-store"}),t=await e.json();return t}catch(e){console.log(e)}},i=async e=>{try{let t=await fetch("/api/admin/update-product",{method:"PUT",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(l.Z.get("token"))},cache:"no-store",body:JSON.stringify(e)}),n=await t.json();return n}catch(e){console.log(e)}},r=async e=>{try{let t=await fetch("/api/admin/delete-product?id=".concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(l.Z.get("token"))}}),n=await t.json();return n}catch(e){console.log(e)}}},8147:function(e,t,n){"use strict";n.d(t,{GP:function(){return u},GU:function(){return a},Hp:function(){return o},d2:function(){return r},jJ:function(){return c},mO:function(){return d},p8:function(){return l},qe:function(){return s},vV:function(){return i}});let l=[{id:"home",label:"Home",path:"/"},{id:"listing",label:"All Products",path:"/product/listing/all-products"},{id:"listingMen",label:"Men",path:"/product/listing/men"},{id:"listingWomen",label:"Women",path:"/product/listing/women"},{id:"listingKids",label:"kids",path:"/product/listing/kids"}],a=[{id:"adminListing",label:"Manage All Products",path:"/admin-view/all-products"},{id:"adminNewProduct",label:"Add New Product",path:"/admin-view/add-product"}],o=[{id:"name",type:"text",placeholder:"Enter your name",label:"Name",componentType:"input"},{id:"email",type:"email",placeholder:"Enter your email",label:"Email",componentType:"input"},{id:"password",type:"password",placeholder:"Enter your password",label:"Password",componentType:"input"},{id:"role",type:"",placeholder:"",label:"Role",componentType:"select",options:[{id:"admin",label:"Admin"},{id:"customer",label:"customer"}]}],i=[{id:"email",type:"email",placeholder:"Enter your email",label:"Email",componentType:"input"},{id:"password",type:"password",placeholder:"Enter your password",label:"Password",componentType:"input"}],r=[{id:"name",type:"text",placeholder:"Enter name",label:"Name",componentType:"input"},{id:"price",type:"number",placeholder:"Enter price",label:"Price",componentType:"input"},{id:"description",type:"text",placeholder:"Enter description",label:"Description",componentType:"input"},{id:"category",type:"",placeholder:"",label:"Category",componentType:"select",options:[{id:"men",label:"Men"},{id:"women",label:"Women"},{id:"kids",label:"Kids"}]},{id:"deliveryInfo",type:"text",placeholder:"Enter deliveryInfo",label:"Delivery Info",componentType:"input"},{id:"onSale",type:"",placeholder:"",label:"On Sale",componentType:"select",options:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{id:"priceDrop",type:"number",placeholder:"Enter Price Drop",label:"Price Drop",componentType:"input"}],c=[{id:"s",label:"S"},{id:"m",label:"M"},{id:"l",label:"L"}],s={apiKey:"AIzaSyB0uLYyq6CVKV3WnR5CJX7IJEGxpJtBKKU",authDomain:"mlrit-d561f.firebaseapp.com",projectId:"mlrit-d561f",storageBucket:"mlrit-d561f.appspot.com",messagingSenderId:"463345053722",appId:"1:463345053722:web:028c8783a9aa52289421a3",measurementId:"G-19GGLWKHXF"},d="gs://mlrit-d561f.appspot.com",u=[{id:"fullName",type:"input",placeholder:"Enter your full name",label:"Full Name",componentType:"input"},{id:"address",type:"input",placeholder:"Enter your full address",label:"Address",componentType:"input"},{id:"city",type:"input",placeholder:"Enter your city",label:"City",componentType:"input"},{id:"country",type:"input",placeholder:"Enter your country",label:"Country",componentType:"input"},{id:"postalCode",type:"input",placeholder:"Enter your postal code",label:"Postal Code",componentType:"input"}]}},function(e){e.O(0,[513,286,253,698,744],function(){return e(e.s=1671)}),_N_E=e.O()}]);