import {
  MenuAlt3Icon,
  PhoneIcon,
  MailIcon,
  CodeIcon,
} from "@heroicons/react/solid";

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-zinc-800 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center h-full w-full px-10">
          <h2 className="text-3xl text-center">
            &#128075; Hello there, I&apos;m{" "}
            <strong className="font-black">Miguel</strong>, a full-stack
            developer
          </h2>
          <a
            href="#a-section"
            className="border px-4 py-2 rounded-lg mt-14 hover:bg-white hover:text-black font-thin text-lg"
          >
            Know my job
          </a>
        </div>
      </div>
      <header className="w-100 bg-white border-b-2 sticky top-0">
        <div className="container mx-auto flex items-center justify-between h-14 px-6">
          <p className="font-black text-3xl">M</p>
          <MenuAlt3Icon className="h-10 w-10" />
        </div>
      </header>
      <main id="a-section" className="w-100 bg-gray-100">
        <section>
          <article className="py-20 px-6">
            <p className="text-center container mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quis
              ducimus eveniet consequuntur et laudantium voluptate harum in.
              Incidunt qui, nesciunt doloribus corporis molestias modi
              exercitationem veniam fuga. Deserunt, incidunt!
            </p>
          </article>

          <article className="text-center py-20 px-6 bg-orange-600 text-white">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold">&#128188; Experience</h2>
              <p className="py-4">
                I was involved in multiple industries through my career path
              </p>
              <div className="w-full text-left rounded-lg">
                <div className="pl-6 py-4 border-l-4 border-orange-800">
                  <h2 className="text-3xl font-black mb-4">2019</h2>
                  <ul>
                    <li className="bg-orange-700 p-4 rounded-lg">
                      <div className="flex w-full justify-between items-center mb-1">
                        <h2 className="font-bold text-lg">FrontEnd Dev, Jr</h2>
                        <p className="flex items-center h-full">
                          <CodeIcon className="h-5 w-5 mr-1" />
                          <span>Cubit</span>
                        </p>
                      </div>
                      <p className="font-thin">
                        I developed React Native applications
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="pl-6 py-4 border-l-4 border-orange-800">
                  <h2 className="text-3xl font-black mb-4">2020</h2>
                  <ul>
                    <li className="bg-orange-700 p-4 rounded-lg mb-4">
                      <div className="flex w-full justify-between items-center mb-1">
                        <h2 className="font-bold text-lg">
                          FrontEnd Dev, Jr Adv
                        </h2>
                        <p className="flex items-center h-full">
                          <CodeIcon className="h-5 w-5 mr-1" />
                          <span>Cubit</span>
                        </p>
                      </div>
                      <p className="font-thin">
                        Developed Mobile applications with Flutter and React
                        Native, full-stack web applications with NodeJS,
                        serverless, ReactJS, AngularJS, Gatsby and Vanilla JS
                      </p>
                    </li>
                    <li className="bg-orange-700 p-4 rounded-lg mb-4">
                      <div className="flex w-full justify-between items-center mb-1">
                        <h2 className="font-bold text-lg">FrontEnd Dev</h2>
                        <p className="flex items-center h-full">
                          <CodeIcon className="h-5 w-5 mr-1" />
                          <span>Celerik</span>
                        </p>
                      </div>
                      <p className="font-thin">
                        Developed web applications and chrome extensions with
                        ReactJS
                      </p>
                    </li>
                    <li className="bg-orange-700 p-4 rounded-lg mb-4">
                      <div className="flex w-full justify-between items-center mb-1">
                        <h2 className="font-bold text-lg">Team Leader</h2>
                        <p className="flex items-center h-full">
                          <CodeIcon className="h-5 w-5 mr-1" />
                          <span>Celerik</span>
                        </p>
                      </div>
                      <p className="font-thin">
                        Managed small teams for various projects, also developed
                        applications with NodeJS, Serverless Framework, ReactJS
                        and Angular 8
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="pl-6 py-4 border-l-4 border-orange-800">
                  <h2 className="text-3xl font-black mb-4">2021</h2>
                  <ul>
                    <li className="bg-orange-700 p-4 rounded-lg">
                      <div className="flex w-full justify-between items-center mb-1">
                        <h2 className="font-bold text-lg">Web UI Dev, Sr</h2>
                        <p className="flex items-center h-full">
                          <CodeIcon className="h-5 w-5 mr-1" />
                          <span>Globant</span>
                        </p>
                      </div>
                      <p className="font-thin">
                        Currently working as Senior Frontend Dev. Work with
                        ReactJS and Typescript
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="text-center py-20 px-6 bg-indigo-600 text-white">
            <h2 className="text-2xl font-bold mb-2">&#129430; Knowledge</h2>
            <p className="mb-10">Technologies that I &#10084; to use</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              <div className="flex justify-center">
                <div className="h-36 w-36 bg-indigo-700 rounded-full flex items-center justify-center">
                  <p className="font-bold text-xl">ES5+</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-36 w-36 bg-indigo-700 rounded-full flex items-center justify-center">
                  <p className="font-bold text-xl">TS</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-36 w-36 bg-indigo-700 rounded-full flex items-center justify-center">
                  <p className="font-bold text-xl">React</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-36 w-36 bg-indigo-700 rounded-full flex items-center justify-center">
                  <p className="font-bold text-xl">Angular 8+</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-36 w-36 bg-indigo-700 rounded-full flex items-center justify-center">
                  <p className="font-bold text-xl">NodeJS</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-36 w-36 bg-indigo-700 rounded-full flex items-center justify-center">
                  <p className="font-bold text-xl">Webpack/Rollup</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-36 w-36 bg-indigo-700 rounded-full flex items-center justify-center">
                  <p className="font-bold text-xl">Python</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-36 w-36 bg-indigo-700 rounded-full flex items-center justify-center">
                  <p className="font-bold text-xl">AWS</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <footer className="w-100 bg-zinc-700 text-white py-10">
        <section className="container mx-auto">
          <article className="text-center flex flex-col items-center">
            <h2 className="font-bold text-lg">Contact</h2>
            <a
              href="https://wa.me/573004407047"
              target="_blank"
              rel="noreferrer"
              className="flex items-center font-thin mt-2"
            >
              <PhoneIcon className="h-4 w-4 mr-2" />
              <span>+57 (300) 440 70 47</span>
            </a>
            <a
              href="https://wa.me/573004407047"
              target="_blank"
              rel="noreferrer"
              className="flex items-center font-thin mt-2"
            >
              <MailIcon className="h-4 w-4 mr-2" />
              <span>migpalg@gmail.com</span>
            </a>
          </article>

          <article className="text-center mt-10 opacity-50">
            <p>
              Developed by:{" "}
              <a
                href="https://github.com/migpalg"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                Miguel Palacio
              </a>
            </p>
          </article>
        </section>
      </footer>
    </div>
  );
}
