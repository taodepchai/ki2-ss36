import { useEffect, useState } from 'react';

const Bt6 = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY  );
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();
  }, []);

  useEffect(() => {
    document.title = `Scroll: ${scrollPosition}`;
  }, [scrollPosition]);

  return (
    <div>
      <h1>bt6</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugit id sint, totam similique magnam alias ullam, itaque tenetur, quis laborum quod voluptates nobis nostrum perspiciatis. Ad autem facere non.
      Non doloribus culpa dolore obcaecati earum recusandae, deleniti saepe nihil esse voluptatibus rerum asperiores repudiandae quas harum deserunt, aliquid similique quidem. Accusamus quaerat delectus ipsa inventore debitis perferendis repellendus voluptates.
      Suscipit asperiores nemo ratione ipsam, eveniet enim? Saepe quia non doloremque ratione ad, quisquam fugit accusamus fugiat facere sint cupiditate tempora quasi libero nisi obcaecati nihil illum natus! Officiis, accusamus!
      Dolor, magni libero placeat itaque, voluptate facilis voluptates in quos odio et consequatur at repellat. Sit quasi id a earum autem officiis harum. Quisquam itaque suscipit maiores, quia magnam pariatur!
      Quas officia amet accusamus debitis velit reiciendis iste, placeat praesentium commodi tempore nam a exercitationem vitae, dignissimos sapiente totam laborum dolorem mollitia consequatur. Labore ex voluptatibus quisquam quasi quaerat blanditiis!
      Molestiae hic labore quod autem eius. Unde magnam libero asperiores. Id repellendus nesciunt deleniti, esse eum voluptates mollitia cum explicabo quas velit ipsa dolor vitae possimus enim omnis nam quis?
      Quaerat quae nihil officia ex quis rerum, beatae facere laboriosam architecto ipsa quam assumenda reprehenderit possimus perspiciatis reiciendis impedit fugit doloribus eaque suscipit. Totam, atque eaque. Soluta nihil obcaecati architecto!
      Similique dignissimos qui aspernatur, sunt dolorum eum nostrum architecto ad recusandae quaerat at hic quo ullam non, maiores perferendis odit obcaecati! Ab qui autem minima blanditiis totam officia ratione aliquid!
      Itaque exercitationem accusantium ratione explicabo laborum, dolorum vero dolorem quas officia, ducimus unde placeat optio tempore recusandae beatae voluptatum. Quos, possimus error. Rem aut quibusdam veniam tempore possimus laborum quaerat!
      Perferendis repellendus, optio fugit, et minima officia ipsa a vero reprehenderit, nam maiores excepturi provident quam illum iure non repudiandae. Voluptatibus inventore maxime commodi repellat asperiores amet vitae sapiente aliquid?
      Totam eos, explicabo autem reprehenderit iure itaque dicta, corporis est facere quaerat facilis saepe officiis! Facilis labore voluptatibus, odio explicabo ipsum quo quaerat aut excepturi, laborum architecto minus praesentium temporibus.
      Culpa at officia labore dicta consequatur autem nobis saepe inventore animi iusto cumque provident sint voluptates blanditiis a quae, nam fuga cum ut tenetur! Aspernatur, deleniti veniam! Quibusdam, voluptatum iusto.
      Corrupti, numquam. Accusamus sapiente dignissimos, cupiditate repudiandae earum beatae quisquam, ut deleniti fuga consectetur est facere quia eaque, porro natus doloribus odio! Ad corporis odio quos numquam dolore. Blanditiis, tempore?
      Beatae possimus ex veritatis, quod sint facilis, amet, minus dolorum eligendi hic enim laudantium quis illum quisquam ipsum. Laborum non, nostrum odio dolor numquam qui veniam aspernatur consequuntur voluptate iure.
      Asperiores fugiat iusto ea, ex, reiciendis numquam adipisci iste consequuntur mollitia itaque explicabo ipsa hic. Fugiat natus ullam vero inventore, quae, saepe, magni aspernatur debitis officia veritatis deleniti expedita veniam!
      Nisi nulla autem at nesciunt amet veniam, nostrum cumque consequatur, totam non quae. Natus debitis eligendi, quo inventore maiores sapiente consequuntur distinctio adipisci pariatur nulla perferendis neque, illo velit labore!
      Soluta reiciendis iste deserunt doloremque harum quidem delectus, atque non aut mollitia saepe obcaecati similique, excepturi suscipit maxime cum, ipsa animi alias incidunt quibusdam. Labore rem in accusantium consequuntur voluptatibus?
      Tempore numquam soluta consectetur, optio dolore deleniti dolorem a ducimus reiciendis sit et nisi quos non quasi adipisci officia placeat illo ut! Minima hic dolores labore distinctio soluta voluptates corrupti!
      Explicabo sapiente fuga illo cum doloribus? Quod quam totam quo cumque officia. Qui ea voluptatum error perspiciatis, veniam quos nobis consequuntur nulla, odio hic nisi exercitationem repudiandae deserunt quas illo.
      Atque in fuga, odio vitae mollitia distinctio dolorum, accusantium quidem earum ab impedit vero placeat quam sapiente obcaecati recusandae dolore nam repudiandae? Alias ipsa obcaecati consequatur fugiat quidem sequi animi?
      Inventore repellendus recusandae ducimus voluptatem dolor labore est adipisci neque sit maxime commodi quisquam magni eligendi eos sapiente blanditiis provident officiis ipsam soluta dolores, harum aperiam. Laborum aperiam eligendi cumque?
      Non, quo at unde dolor animi beatae odio eius maiores quidem quibusdam. Molestias natus sapiente quia rem perferendis officiis odio tempore, doloremque aliquid possimus est ab consequuntur sed totam harum!
      Alias dignissimos earum non nulla aliquam numquam sunt quae vero, eum quo voluptatum deserunt inventore mollitia maxime aut totam rem culpa voluptates atque enim ea. Odio eveniet nostrum nobis aspernatur!
      Rerum nesciunt est accusantium nam dicta repellendus recusandae itaque consectetur, beatae cupiditate, temporibus quae eaque. Ipsum, est? Delectus molestias ex eum, iusto excepturi, neque quia cum exercitationem, omnis architecto voluptatibus.
      Exercitationem officiis mollitia earum nisi, nostrum autem itaque odio soluta consequuntur dignissimos repellendus quisquam placeat! Fuga deserunt, impedit quisquam ad amet, perspiciatis esse eius at dolor, pariatur numquam porro adipisci?
      Minus officia nesciunt harum deserunt fuga cum ea aliquid nobis obcaecati doloribus tenetur enim rem laudantium dolorum aperiam, cupiditate sit dolore sapiente deleniti corrupti error voluptates, excepturi assumenda! Unde, reiciendis.
      Possimus debitis est sint magni repellendus dolor harum illo dicta dolore mollitia fuga, perspiciatis voluptate beatae totam nesciunt asperiores incidunt, eveniet libero ducimus quo in, nam quae nihil tempora. Nobis.
      Ipsa expedita, repellat doloremque quaerat et odit vel fugiat dolorum dicta minus. Possimus tenetur sapiente a porro, dolorum quaerat. Officiis neque necessitatibus ad dolorum nobis distinctio error totam alias vel.
      A aliquam cumque fugit dignissimos est quis provident tenetur maxime dolorum magni, tempore omnis itaque voluptatem optio numquam corrupti quibusdam ut vero ipsa repellat officiis error eos unde autem! Expedita.
      Exercitationem velit vel omnis. Accusantium vero sit delectus minima nisi molestiae est fuga amet iusto expedita. Consequuntur, ipsum, eaque aliquid nobis fugit repellat magnam beatae eligendi alias, corporis assumenda atque.
      Consequuntur porro rem illum incidunt, enim cum, dicta quas voluptate sint repellendus, dolor amet necessitatibus. Assumenda tenetur minus, illo perspiciatis repudiandae, voluptate dolores cum unde, adipisci illum eos nobis aut?
      Nam et provident necessitatibus quis delectus laudantium cumque quod, dolore totam eveniet eaque in aut praesentium natus consectetur incidunt, pariatur eligendi est odio obcaecati dolor perferendis. Totam repellat dolore odio!
      Assumenda pariatur porro nam explicabo provident sapiente, dolor dolore, odio minus nulla reiciendis dolorum sequi obcaecati veritatis numquam magni quaerat ea quibusdam voluptatum voluptas! Inventore rem eum dolore molestiae quidem.
      Voluptatibus ut minima, accusantium, dolores vel quam eius voluptate debitis inventore neque dignissimos voluptates veritatis nemo error numquam fuga deserunt consequuntur repudiandae hic commodi aliquid. Dignissimos officiis rerum error quam.
      Perspiciatis harum eligendi eveniet quod quas id. Illum culpa distinctio et. Praesentium quasi suscipit, dolorum, quidem, atque porro necessitatibus aliquam maxime cumque odit voluptatum in consectetur nulla officia dicta iusto!
      Illo dolor libero vel tenetur amet nisi, ducimus corporis rerum soluta nesciunt qui iusto, esse perspiciatis laborum ab quasi ipsa odio. Quas sapiente numquam optio est esse totam. Sit, eligendi!
      Voluptate aspernatur earum doloribus incidunt dolor nobis blanditiis, magni aliquid quasi? Sunt vitae in similique perspiciatis cumque quas est, a rerum corrupti porro consequuntur voluptate, impedit dicta minus deserunt sequi.
      Cum vel ut ea quis blanditiis, aspernatur maxime cumque iste ipsa adipisci earum sed fuga omnis. Cupiditate totam iure quidem et, ea iusto voluptatibus. Voluptate expedita quas illo nihil aliquid?
      Ipsum facilis doloremque suscipit dignissimos architecto incidunt labore nemo consectetur rerum, sequi repellendus hic ea a itaque numquam quo voluptatum, ut at! Doloribus nihil distinctio blanditiis aliquid. Ut, illum nam.
      Consectetur inventore blanditiis velit error quis ipsa maiores commodi ullam reiciendis deleniti. Ipsam blanditiis officiis culpa fugiat, sapiente omnis, ea saepe vel sit, alias nesciunt distinctio obcaecati quod quisquam iusto.
      Delectus quos sapiente eius numquam libero dolores quam harum debitis quod consequatur illo necessitatibus molestias tempore omnis accusamus minima exercitationem nostrum nobis laudantium, aliquid fugit similique aperiam doloremque quasi. Libero!
      Necessitatibus expedita neque nulla deserunt aliquam, natus velit, itaque accusamus non sit perspiciatis eaque harum suscipit? Exercitationem illo quasi tempore, culpa illum beatae quibusdam tempora quas, voluptas nam porro asperiores!
      Animi provident cum autem inventore placeat rerum consequuntur dolorem iure laboriosam quas voluptatem numquam perspiciatis tempora, illo doloribus sit neque. Rem cumque at illum ad. Enim dolorem repellat doloremque aperiam?
      Atque deleniti at mollitia quibusdam dicta quidem sequi enim, non iusto sed, odit dolorem ad esse pariatur libero obcaecati inventore facilis quisquam voluptatem minima animi voluptas. Voluptate aperiam perferendis ea.
      Sed, minima magni aspernatur tenetur officia modi ipsum alias atque iusto eos sunt, quibusdam rem cum. Vitae beatae fugiat sequi repellat possimus corrupti repudiandae maxime, illo magnam officiis provident veritatis.
      Ducimus eum, perspiciatis perferendis, eligendi consectetur, ut iure quod pariatur exercitationem illum at et laborum nisi earum saepe beatae quia quam tempora! Consequuntur molestias aperiam quasi vel. Excepturi, asperiores recusandae!
      Mollitia architecto fuga nobis magni sequi, dolor, voluptas, vitae libero facere sint vel debitis eligendi porro alias odit corrupti dolore officiis nisi perspiciatis ab! Quis consequatur corporis veritatis nemo repellat.
      Eligendi consequuntur eum velit rerum ducimus minima officiis repellendus alias obcaecati inventore sit nisi beatae placeat nesciunt harum, voluptate exercitationem sed ipsa! Harum, totam! Consequatur atque voluptatum soluta officia eum.
      Doloremque ad in blanditiis nostrum adipisci totam sunt nihil mollitia officiis similique illum magnam, aliquam vel eligendi eum hic, laboriosam impedit tempora aspernatur cupiditate? A quisquam at quos numquam amet!
      Saepe porro obcaecati, odio iure eaque voluptate facilis consequatur libero exercitationem pariatur velit doloremque perspiciatis explicabo sapiente, ipsum quidem ut incidunt sunt quod illo dolores quae! Quaerat dolore expedita perspiciatis.</p>
    </div>
  );
};

export default Bt6;
