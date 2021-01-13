## Technical Test Task For Unbiased

[Demo page](https://shaburovpv.github.io/Unbiased-Test-Task)

To complete task, in addition to Vue framework, to reduce time for development, application uses following packages:

* **bootstrap** – Minimal set of styles for prototyping a form. Scss version is used and only necessary modules are connected to reduce the bundle size.

* **vuelidate** – Utility for easy form validation.

* **vue-the-mask** – Mask is used for fields "Phone" and "Date" to simplify validation and improve the user experience.

* **libphonenumber-js** – Library for the best validation of phone numbers.

In the future, it would be possible to add error handling of messages from server and implement display of these errors in the corresponding form fields.
It possible to connect the YUP library to implement schema-based validation also.
There is possibility to use AplloClient library to work with GraphQL queries more conveniently.
You can also connect the some UI library to improve modals and use datepicker for Date field.
