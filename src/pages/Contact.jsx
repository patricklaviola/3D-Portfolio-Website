import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Footer from '../components/Footer';

import Loader from '../components/Loader';
import Alert from '../components/Alert';

import Astronaut from '../models/astronaut';
import useAlert from '../hooks/useAlert';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Static Pose");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("Armature Astronaut|Armature AstronautAction");
  const handleBlur = () => setCurrentAnimation("Static Pose");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("Armature Astronaut|Armature AstronautAction");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("Static Pose");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("Static Pose");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <>
      <section className='relative flex lg:flex-row flex-col max-container'>
        {alert.show && <Alert {...alert} />}

        <div className='flex-1 min-w-[40%] flex flex-col'>
          <h1 className='head-text'>Get in Touch</h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='w-full flex flex-col gap-7 mt-14'
          >
            <label className='text-black-500 font-semibold'>
              Name
              <input
                type='text'
                name='name'
                className='input'
                placeholder='John'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Email
              <input
                type='email'
                name='email'
                className='input'
                placeholder='John@gmail.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Your Message
              <textarea
                name='message'
                rows='4'
                className='textarea'
                placeholder='Write your thoughts here...'
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className='btn'
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
        <div className='lg:w-1/2 w-full lg:h-[900px] md:h-[450px] h-[350px]'>
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[-1, 2, -2]} intensity={0.2} />
            <ambientLight intensity={0.2} />
            <pointLight position={[0, 2, -0.3]} intensity={0.4} />
            <spotLight
              position={[-0.2, 1.7, 0.4]}
              angle={3}
              penumbra={0.6}
              intensity={0.4}
            />
            <Suspense fallback={<Loader />}>
              <Astronaut
                currentAnimation={currentAnimation}
                position={[0, 0.3, 0]}
                rotation={[12.8, 1, 0]}
                scale={[4, 4, 4]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
      <hr className="border-slate-200"/>
      <Footer />
    </>
  );
};

export default Contact;