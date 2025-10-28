import React from 'react';
export const Contact = () => {
    return <div>
      
  <section className="body">
      <div className="contact_form">
              <div className="formulario">			
                   <h1>Formulario de contacto</h1>
                      <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>
                          <form action="#" method="post">				
                                  <p>
                                      <label for="nombre" className="colocar_nombre">Nombre
                                          <span className="obligatorio">*</span>
                                      </label>
                                          <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
                                  </p>
                              
                                  <p>
                                      <label for="email" className="colocar_email">Email
                                          <span className="obligatorio">*</span>
                                      </label>
                                          <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"/>
                                  </p>
                          
                                  <p>
                                      <label for="telefono" className="colocar_telefono">Teléfono
                                      </label>
                                          <input type="tel" name="introducir_telefono" className="telefono" placeholder="Escribe tu teléfono"/>
                                  </p>	
                              
                                  <p>
                                      <label for="mensaje" className="colocar_mensaje">Mensaje
                                          <span className="obligatorio">*</span>
                                      </label>                     
                                           <textarea name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                                     </p>	  								
                              
                                  <button type="submit" name="enviar_formulario" className="enviar"><p>Enviar</p></button>			
                          
                      </form>
              </div>	
      </div>
  
  </section>
    </div>
    
    ;
  };
 