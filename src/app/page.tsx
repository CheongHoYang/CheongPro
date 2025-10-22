import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Section */}
        <section 
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50"
          itemScope 
          itemType="https://schema.org/Person"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0 group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800 group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-colors duration-300 shadow-lg group-hover:shadow-xl">
                <Image
                  src="/profile.jpg" // 여기에 이미지 파일명을 입력하세요
                  alt="정프로 프로필 사진"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  I AM <span className="text-blue-600 dark:text-blue-400" itemProp="name">정프로</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300" itemProp="jobTitle">
                  포지션: PM 서비스 기획 / FE Developer(jr)
                </p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Contact
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    Email: leepro@naver.com
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Phone: +082 - 1234-5678
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Channel
                </h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">SNS:</span>
                    <div className="flex gap-2">
                      <div className="w-8 h-6 bg-gray-200 dark:bg-gray-700 rounded border"></div>
                      <div className="w-8 h-6 bg-gray-200 dark:bg-gray-700 rounded border"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">GitHub:</span>
                    <div className="w-8 h-6 bg-gray-200 dark:bg-gray-700 rounded border"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduce Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Introduce</h2>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              안녕하세요! 저는 서비스 기획과 프론트엔드 개발을 함께 하는 정프로입니다. 
              사용자 중심의 서비스를 기획하고, 이를 직접 구현해보는 것을 좋아합니다. 
              PM으로서의 기획 경험과 개발자로서의 기술적 역량을 바탕으로 
              더 나은 사용자 경험을 제공하는 서비스를 만들고자 합니다.
            </p>
          </div>
        </section>

        {/* Tech Skill Section */}
        <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tech Skill</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'JS', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200', icon: '🟨' },
              { name: 'TS', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200', icon: '🔷' },
              { name: 'React', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200', icon: '⚛️' },
              { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200', icon: '🎨' },
              { name: 'Premiere Pro', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200', icon: '🎬' }
            ].map((skill, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 ${skill.color} group`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="mr-2 group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </span>
                {skill.name}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
