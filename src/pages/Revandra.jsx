import profilePic from '../assets/pfp1.png';

export default function Revandra() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0c95b0] p-4">
      {/* Main Card Container */}
      <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl md:flex-row">

        {/* Left Section: Avatar & Action */}
        <div className="flex flex-col items-center border-gray-100 p-8 md:w-1/3 md:border-r">
          <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-[#08a1bf]">
            <img
              src={profilePic}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="mt-6 text-xl font-bold text-[#08a1bf]">Revandra Ahza Rizkia</h2>
          <h2 className="text-xl font-bold text-[#08a1bf]">T2A</h2>
          <p className="text-gray-500 font-medium">Teknologi Informasi (D3)</p>
        </div>

        {/* Right Section: Details */}
        <div className="flex flex-col space-y-8 p-10 md:w-2/3">
          {/* About Me */}
          <section>
            <h3 className="text-xl font-bold text-[#08a1bf]">About Me</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Mahasiswa Teknologi Informasi semester 2 Fakultas Vokasi Universitas Brawijaya. Lahir 14 April 2007 di kota Bogor.
              Sudah menggunakan teknologi seperti laptop dan konsol game sejak umur 4 tahun. Ketertarikannya terhadap dunia teknologi didasari oleh keinginannya untuk mengembangkan sebuah game.<br /> <br />
              Saat ini aktif sebagai pengurus di Unit Aktivitas Panahan Universitas Brawijaya. Beberapa kegiatan yang sering dilakukan saat waktu luang (atau hobi) mencakup main game, menggambar, doomscrolling, memasak, menonton anime, mendengar musik, atau mencari jajanan ke luar.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-xl font-bold text-[#08a1bf]">Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'PHP', 'SQL'].map((skill) => (
                <span key={skill} className="rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-[#058199]">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h3 className="text-xl font-bold text-[#08a1bf]">Contact Information</h3>
            <div className="mt-4 space-y-3 text-gray-600">
              <div className="flex items-center gap-3">
                <span className="text-indigo-600">📧</span> revandra@example.com
              </div>
              <div className="flex items-center gap-3">
                <span className="text-indigo-600">📞</span> +62 8xx xxxx xxxx
              </div>
              <div className="flex items-center gap-3">
                <span className="text-indigo-600">📍</span> Payakumbuh, Sumatera Barat
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}