const e="feedback-form-state",t={},a=document.querySelector(".feedback-form"),r=document.querySelector("input"),o=document.querySelector("textArea");!function(){const a=localStorage.getItem(e);if(a){let e=JSON.parse(a);r.value=e.email||"",o.value=e.message||"",t.email=e.email,t.message=e.message}}(),a.addEventListener("submit",(function(a){a.preventDefault(),a.currentTarget.reset(),localStorage.removeItem(e),console.log(t),t.email="",t.message=""})),a.addEventListener("input",_.throttle((function(a){t[a.target.name]=a.target.value;let r=JSON.stringify(t);localStorage.setItem(e,r)}),500));
//# sourceMappingURL=03-feedback.67354073.js.map
