
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const Privacy = () => {
  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        <SectionTitle 
          title="Política de Privacidad" 
        />
        
        <div className="prose prose-lg max-w-none">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            Audrey Tessier, con domicilio en Calle Ejemplo 123, 28001 Madrid y NIF XXXXXXXXX.
          </p>
          
          <h2>2. Finalidad del tratamiento</h2>
          <p>
            Los datos personales que nos facilites serán tratados con la finalidad de:
          </p>
          <ul>
            <li>Gestionar las consultas, solicitudes o contratación de servicios que nos realices.</li>
            <li>Enviarte comunicaciones comerciales sobre nuestros productos y servicios, si nos has dado tu consentimiento para ello.</li>
          </ul>
          
          <h2>3. Legitimación del tratamiento</h2>
          <p>
            La base legal para el tratamiento de tus datos es:
          </p>
          <ul>
            <li>La ejecución de la relación contractual cuando contrates nuestros servicios.</li>
            <li>Tu consentimiento para el tratamiento de tus datos con fines publicitarios.</li>
          </ul>
          
          <h2>4. Conservación de los datos</h2>
          <p>
            Tus datos personales se conservarán mientras se mantenga la relación comercial y no solicites su supresión y, en caso de que lo solicites, durante el tiempo necesario para el cumplimiento de las obligaciones legales.
          </p>
          
          <h2>5. Destinatarios</h2>
          <p>
            Tus datos no serán comunicados a terceros salvo que:
          </p>
          <ul>
            <li>Exista una obligación legal.</li>
            <li>Sea necesario para la prestación del servicio contratado.</li>
          </ul>
          
          <h2>6. Derechos</h2>
          <p>
            Tienes derecho a obtener confirmación sobre si estamos tratando datos personales que te conciernen y, en tal caso, acceder a los mismos. Puedes igualmente solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. En determinadas circunstancias, podrás solicitar la limitación del tratamiento de tus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.
          </p>
          <p>
            Para ejercer estos derechos puedes dirigirte a Audrey Tessier a través del correo electrónico info@audreytessier.es o mediante carta dirigida a la dirección postal indicada anteriormente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
