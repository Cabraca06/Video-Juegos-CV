import React, { useState } from 'react';
import '../styles/Contact.css';
export const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página
        // Aquí iría la lógica para enviar los datos (por ejemplo, a una API)
        console.log('Datos del formulario:', formData);
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        // Opcional: limpiar el formulario después de enviar
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      };
    
      return (
        <section className="body">
            <div className="contact_form">
                <div className="formulario">			
                    <h1>Formulario de contacto</h1>
                    <h3>Escríbenos y en breve nos pondremos en contacto contigo</h3>
                    {/* Se añade el manejador onSubmit y se quitan action/method */}
                    <form onSubmit={handleSubmit}>				
                        <p>
                            {/* ERROR CORREGIDO: En JSX se usa 'htmlFor' en lugar de 'for' */}
                            <label htmlFor="nombre" className="colocar_nombre">Nombre:
                                <span className="obligatorio">*</span>
                            </label>
                            {/* Se enlaza el input al estado de React */}
                            <input type="text" name="nombre" id="nombre" required value={formData.nombre} onChange={handleChange} placeholder="Escribe tu nombre"/>
                        </p>
                        <p>
                            <label htmlFor="email" className="colocar_email">Email:
                                <span className="obligatorio">*</span>
                            </label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} placeholder="Escribe tu Email"/>
                        </p>
                        <p>
                            <label htmlFor="telefono" className="colocar_telefono">Teléfono:</label>
                            <input type="tel" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} placeholder="Escribe tu teléfono"/>
                        </p>	
                        <p>
                            <label htmlFor="mensaje" className="colocar_mensaje">Mensaje:<span className="obligatorio">*</span></label>                     
                            <textarea name="mensaje" className="texto_mensaje" id="mensaje" required value={formData.mensaje} onChange={handleChange} placeholder="Deja aquí tu comentario..."></textarea> 
                        </p>	  								
                        <button type="submit" name="enviar_formulario" className="enviar">Enviar</button>			
                    </form>
                </div>	
            </div>
        </section>
      );
    };
    