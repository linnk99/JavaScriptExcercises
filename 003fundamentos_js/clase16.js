var signo = prompt('¿Cuál es tu signo?').toLowerCase()

//console.log(signo)
switch (signo) {
    case 'acuario':
        console.log('​Trabajo y negocios: intensa producción de ideas; logrará el apoyo necesario y las concretará. Amor: acordará con su pareja disfrutar del amor en libertad y sin ataduras; nuevos planes.')
        break
    case 'piscis':
        console.log('​Trabajo y negocios: sus ideas para crecer en lo material serán muy bien recibidas por su entorno. Amor: halla compañerismo pero falta un poco de ternura. Algo ya no funciona como antes.')
        break
    case 'cáncer':
    case 'cancer':
        console.log('Trabajo y negocios: pedirá apoyo para un nuevo negocio y descubrirá que posee aliados inesperados. Amor: la vida social será intensa. Llamadas, invitaciones. Acepte; será muy divertido')
        break
    case 'aries':
        console.log('Trabajo y negocios: ganará litigios o hallará bienes que creía perdidos. Sumará éxitos resonantes. Amor: tratará de mantener en secreto una propuesta que creará ilusión a una bella persona.')
        break
    case 'tauro':
        console.log('Trabajo y negocios: novedades positivas en proyectos de autonomía económica; resultados espectaculares. Amor: el trabajo se mete en la pareja y afecta la armonía, evite mezclar las cosas.')
        break
    case 'géminis':
    case 'geminis':
        console.log('Trabajo y negocios: se suman los pedidos y trabajos nuevos. Los negocios rinden más de lo esperado. Amor: dejará atrás las pasadas experiencias y comenzará nueva amistad o romance.')
        break
    case 'leo':
        console.log('Trabajo y negocios: se concretará un esperado viaje de negocios. Se sentirá a sus anchas con gente afín. Amor: una ex pareja despertará viejos conflictos pero con calma, dejará todo atrás.')
        break
    case 'virgo':
        console.log('Trabajo y negocios: dedica demasiado tiempo a sus tareas y los resultados son escasos; urge cambiar. Amor: la tensión le incomodará en la intimidad. Relájese y tendrá momentos felices.')
        break
    case 'libra':
        console.log('Trabajo y negocios: nuevos contactos facilitarán la conclusión de viejos asuntos pendientes. Amor: el coraje de su pareja será el estímulo necesario para renovar la calidez en la intimidad.')
        break
    case 'escorpio':
        console.log('Trabajo y negocios: alguien de su entorno cometerá una deslealtad. Cuide dinero y valores. Amor: ante sus reclamos, su pareja fingirá no acusar recibo pero al final comprenderá.')
        break
    case 'sagitario':
        console.log('Trabajo y negocios: día propicio para la firma de papeles pero evite tomar dinero prestado. Amor: sigue idealizando virtudes que el otro no tiene; vea las cosas realmente como son.')
        break
    case 'capricornio':
        console.log('Trabajo y negocios: la fortuna le sonríe; surgen negocios nuevos y las ganancias fluyen. Amor: todo parece ir bien pero experimenta cierto ahogo, si lo deja pasar será peor.')
        break
    default:
        console.log('No es un signo zodical válido.')
}