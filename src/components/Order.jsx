import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { TacoCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_db89zk6
// service_1zuku7h
// 5eLNN8KWVHZxbtArR

const Order = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    phone_no: '',
    email: "",
    message: "",
  });
  function validatePhone(phone_no){
    if (!phone_no) {
      return phone_no;
    }
    const phone_number = phone_no.replace(/[^\d]/g, '');
    const phone_number_length = phone_no.length;
    if (phone_number_length<4) {
      return phone_number;
    }
    if (phone_number_length<7) {
      return `(${phone_number.slice(0,3)}) ${phone_number.slice(3)}`;
    }
    return `(${phone_number.slice(0,3)}) ${phone_number.slice(3,6)}-${phone_number.slice(6,10)}`
  }
  const handle_phone_input = (e) => {
    const valid_phone = validatePhone(e.target.value);
    setForm(
      setForm({...form, phone_no: valid_phone}));
  }
 
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_1zuku7h",
        "template_7upgixa",
        {
          from_name: form.name,
          to_name: "Smocha Dash",
          from_email: form.email,
          to_email: "kaigongimuchui@gmail.com",
          message: form.message,
        },
        "5eLNN8KWVHZxbtArR"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank for contacting me. I will get back to you as soon as possible."
          );

          setForm({
            name: "",
            phone_no: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(
            "Yikes something must have gone wrong. Please try resending the message thanks."
          );
        }
      );
  };
  return (
    <div className="relative xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}> want a smocha :) </p>
        <h3 className={styles.sectionHeadText}>Order From Us</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Type your name here"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Phone number</span>
            <input
              type="tel"
              name="phone_no"
              value={form.phone_no}
              onChange={handleChange}
              placeholder="Type your phone number here"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {" "}
              Email (optional)
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Type your email here"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Smocha description
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe how you would like your smocha here."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {" "}
              Number to be ordered
            </span>
            <input
              type="number"
              name="number_of_smochas"
              value={form.number_of_smochas}
              onChange={handleChange}
              placeholder="Enter number of smochas to be delivered"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <br />
          <div
            className= "absolute inset-x-0 bottom-0 flex items-center py-5 fixed h-16"
          >
            <button
              type="submit"
              className="bg-secondary m-8 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending order...." : "Order"}
            </button>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Cancelling order...." : "Cancel"}
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <TacoCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Order, "order");
