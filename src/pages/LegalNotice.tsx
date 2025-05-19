
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const LegalNotice = () => {
  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        <SectionTitle 
          title="Aviso Legal" 
        />
        
        <div className="prose prose-lg max-w-none">
          <h2>1. Información general</h2>
          <p>
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
          </p>
          <p>
            La empresa titular de este sitio web es Audrey Tessier, con domicilio a estos efectos en Calle Ejemplo 123, 28001 Madrid y número de identificación fiscal XXXXXXXXX.
          </p>
          
          <h2>2. Términos y condiciones de uso</h2>
          <p>
            El uso de este sitio web implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. Estas condiciones pueden sufrir modificaciones. El usuario se compromete a revisar periódicamente este apartado para estar informado de tales cambios.
          </p>
          
          <h2>3. Propiedad intelectual</h2>
          <p>
            Todos los contenidos del sitio web, incluyendo, a título enunciativo pero no limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Audrey Tessier o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.
          </p>
          
          <h2>4. Enlaces externos</h2>
          <p>
            En el caso de que en este sitio web se dispusiesen enlaces o hipervínculos hacia otros lugares de Internet, Audrey Tessier no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso Audrey Tessier asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.
          </p>
          
          <h2>5. Limitación de responsabilidad</h2>
          <p>
            Audrey Tessier se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web, siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
