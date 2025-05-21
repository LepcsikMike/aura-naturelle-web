
export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
}

export const homeTestimonials: Testimonial[] = [
  {
    quote: "Audrey no solo cuida mi cabello de forma extraordinaria, sino que cada sesión con ella es un regalo para mi bienestar general. Su enfoque consciente marca la diferencia.",
    name: "María López"
  }, 
  {
    quote: "Las sesiones de acompañamiento con Audrey me han ayudado a reconectar conmigo misma en momentos difíciles. Su presencia tranquila y sus conocimientos crean un espacio seguro para la transformación.",
    name: "Carmen Rodríguez"
  },
  {
    quote: "Desde que conozco a Audrey, mi relación con mi imagen personal ha cambiado completamente. Me ha enseñado a cuidarme desde el amor y la consciencia.",
    name: "Lucía Martínez"
  },
  {
    quote: "Lo que más valoro de Audrey es su autenticidad. No solo es una profesional excepcional tanto en peluquería como en acompañamiento energético, sino que vive lo que predica.",
    name: "Ana González",
    role: "Clienta desde 2021"
  }
];
