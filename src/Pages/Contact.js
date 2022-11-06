export default function Contact() {
  return (
    <div className=" mt-20 mx-auto w-[65%] ">
      <table className="w-full text-left text-sm text-gray-500 ">
        <thead className="text-sm text-gray-700 uppercase bg-gray-300 ">
          <tr>
            <th scope="col" className="py-3 px-6">
              Baghdad
            </th>
            <th scope="col" className="py-3 px-6">
              Erbil
            </th>
            <th scope="col" className="py-3 px-6">
              Basra
            </th>
          </tr>
        </thead>
        <tbody className="text-xs text-gray-700 bg-gray-100 ">
          <tr>
            <th scope="row" className="py-4 px-6 font-medium ">
              Hay Al Muthanna 714 – 33 – 16/1 Baghdad – Iraq. Tel : +964
              7827893848 @ : info@trustiraq.com
            </th>
            <th className="py-4 px-6 font-medium">
              Hay Al Muthanna 714 – 33 – 16/1 Baghdad – Iraq Tel : +964
              7827893848 @ : info@trustiraq.com
            </th>
            <th className="py-4 px-6 font-medium">
              Hay Al Muthanna 714 – 33 – 16/1 Baghdad – Iraq Tel : +964
              7827893848 @ : info@trustiraq.com
            </th>
          </tr>
        </tbody>
      </table>

      <div className=" mt-6 mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1666.9837874363716!2d44.44570629496767!3d33.319663163046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x460150b9b1493408!2sTrust%20House%20Insurance%20Company!5e0!3m2!1sen!2siq!4v1667718777977!5m2!1sen!2siq"
          title="map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="mx-auto w-full h-80 "
        />
      </div>
    </div>
  );
}
