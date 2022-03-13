<script>
import Accordion from "./components/Accordion.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Bullet from "./components/Bullet.vue";
import Tags from "./components/Tags.vue";
import Header from "./components/Header.vue";
import Summary from "./components/Summary.vue";
import Project from "./components/Project.vue";

export default {
  components: {
    Accordion,
    Experience,
    Education,
    Bullet,
    Tags,
    Header,
    Summary,
    Project,
  },
};
</script>

<template>
  <div class="h-full min-w-[392px] bg-gray-50 flex flex-col justify-center relative">
    <img src="./assets/aurora.jpg" alt="" class="absolute object-fill h-full w-full" />

    <div class="mx-3 my-6 max-h-4/5 relative px-3 md:px-6 py-3 md:py-6 bg-white shadow-xl ring-gray-900/5 max-w-6xl lg:mx-auto rounded-xl">
      <div class="pt-4 md:pt-8 text-base h-full overflow-hidden leading-7 space-y-6 text-gray-600">
        <Header />

        <div>
          <hr class="mb-3" />
          <Summary />
          <hr class="my-2" />
          <h3 class="pl-2 md:pl-4 font-bold text-xl sm:text-2xl text-gray-700 my-4">
            Experience
          </h3>
          <Experience title="Senior Software Developer" company="Spreadex" location="London, UK" dates="Oct '20 - Present">
            <Bullet>
              Executed full-cycle complex development on a
              <b>vast distributed microservice architecture</b>
              within a multidisciplinary team, for a financial trading and
              sports betting platform with more than
              <b>
                360,000 monthly users.
              </b>
            </Bullet>
            <Bullet>
              Developed features for internal tools as well as the customer-facing platform,
              including working on troubleshooting, improving and optimising the
              user registration process, which led to a significant improvement
              in overall user experience and KPIs. All in the face of tight
              deadlines driven by legislative and regulatory changes, requiring
              overhauls of complex business logic sometimes in a matter of
              weeks.
              <div class="px-3 pt-3">
                <Bullet icon="fi-br-rocket">
                  Increased the monthly registration count by
                  <b>58%</b>
                </Bullet>
                <Bullet icon="fi-br-rocket">
                  Increased conversions to the other platforms by
                  <b>27%</b>
                </Bullet>
                <Bullet icon="fi-br-rocket">
                  Increased the count and average value of client deposits by
                  <b>110%</b> and <b>34%</b>
                  respectively
                </Bullet>
                <Bullet icon="fi-br-rocket">
                  Increased yearly revenue for the company by
                  <b>48%</b>
                </Bullet>
                <Bullet icon="fi-br-rocket">
                  Retained a near
                  <b>100%</b>
                  rate of on-time task delivery
                </Bullet>
              </div>
            </Bullet>
            <Bullet>
              Independently completed full rewrites of critical path aspects of
              the site to
              <b>eradicate years of technical debt.</b>
            </Bullet>
            <Bullet>
              Evangelised and implemented software pattern and UX/UI best
              practices, approaches and technologies, which
              <b>significantly reduced development time on future tasks.</b>
            </Bullet>
            <Bullet>
              Migrated legacy solutions to the cloud.
            </Bullet>
            <Tags tags="ASP.NET MVC, WCF Services, Angular, Tailwind CSS, WPF, Oracle, RabbitMQ, HAProxy" />
          </Experience>

          <Experience title="Consultant, Bespoke Development" company="C5 Alliance" location="Jersey, CI" dates="Jul '17 - Oct '20">
            <Bullet>
              Sole developer on high-profile public sector transformation
              project. Forged and maintained strong, valuable client relationships, and delivered case management web portal which allows for the
              submission of complex application forms with highly granular
              business logic and user permissions. The portal improves
              communication and accountability between all parties and has
              replaced the previous manual paper-based system, delivering
              <b>significant process efficiencies for both the client and their
              customers.</b>
              <div class="px-3 pt-3">
                <Bullet icon="fi-br-rocket">
                  Reduced average case resolution time from
                  <b>12-14 weeks down to 3 weeks</b>
                </Bullet>
              </div>
            </Bullet>
            <Bullet>
              Sole web developer on AML compliance review portal for an
              international team, which sought to replace a slow, error-prone,
              denormalised spreadsheet. Allows for data concurrency, audit
              visibility and collaboration, and
              <b>provides depth and new insight into the data,</b>
              not possible with the previous solution.
            </Bullet>
            <Bullet>
              Independently developed proof of concept for the UK Government,
              designed to aid members of the public in submitting lengthy and
              involved questionnaires to inform regulatory data
              reports. The application deserializes and reconstitutes large
              object graphs rapidly, while
              <b>maintaining strict data integrity.</b>
            </Bullet>
            <Bullet>
              Implemented several enterprise message bus solutions to allow for
              <b>low-latency, high volume integration</b>
              between both client and internal proprietary systems (data entry,
              document management, downstream processing, archival, invoicing).
            </Bullet>
            <Tags tags="ASP.NET MVC / REST API / Razor Pages, SQL Server, Azure Service Bus, SignalR, Dynamics 365 CRM SDK, Azure Cosmos DB, Redis" />
          </Experience>

          <Experience title="Math Centre Assistant & Tutor" company="University of Southern California" location="Los Angeles, CA" dates="Jan '16 - May '17">
            <Bullet>
              Facilitated students' understanding of core calculus, differential
              equation and linear algebra concepts.
            </Bullet>
            <Bullet>
              Assisted students in debugging code for projects completed using
              Mathematica and MatLab.
            </Bullet>
          </Experience>

          <hr class="my-3" />

          <h3 class="pl-2 md:pl-4 font-bold text-xl sm:text-2xl text-gray-700 my-4">
            Education
          </h3>

          <Education institution="University of Southern California" location="Los Angeles, CA" dates="Aug '13 - May '17">
            <Bullet>
              <b>Bachelor of Science in Pure Mathematics.</b>
            </Bullet>
            <Bullet>
              GPA: 3.7 (Magna Cum Laude). Presidential Scholarship recipient and
              Dean's List awardee.
            </Bullet>
            <Bullet>
              Coursework in abstract, algebraic, complex, probabilistic and
              analytical mathematics, as well as physics, computer science,
              neuroscience and psychology.
            </Bullet>
            <Bullet>
              Activities: Concert Choir, Peaks and Professors (hiking society),
              Expat Society, Alpha Phi sorority.
            </Bullet>
            <Bullet>
              Volunteer experience: Kicks for Kids (football for underprivileged
              children in surrounding neighbourhoods), Teach for LA (maths and
              literacy skills for children)
            </Bullet>
          </Education>

          <!-- <Education institution="Jersey College for Girls" location="Jersey, CI" dates="Sep '11 - Jul '13" is-school="true">
            <Bullet>
              A Levels in Mathematics, Physics and Fine Art
            </Bullet>
          </Education> 

          <Education institution=" Les Quennevais School" location="Jersey, CI" dates="Sep '06 - Jul '11" is-school="true">
            <Bullet>
              9 GCSEs with electives in French, Religious Studies, Fine Art and
              Design Technology
            </Bullet>
          </Education>  -->

          <hr class="my-3" />
          <h3 class="pl-2 md:pl-4 font-bold text-xl sm:text-2xl text-gray-700 my-4">
            Personal Projects
          </h3>

          <Project title="Time Tracker" icon="fi-rr-clock">
            <div class="block md:flex md:space-x-3">
              <div class="text-xs sm:text-sm">
                <Bullet>
                  Developed an application to track activities and habits each
                  day to see at a glance how much time is being dedicated to
                  various areas of life.
                </Bullet>
                <Bullet>
                  It also serves as a journal, which can be searched upon using
                  key terms.
                </Bullet>
                <Tags tags="Blazor, ASP.NET REST API, FullCalendar.js, PWA, Entity Framework" />
              </div>
              <!-- <div class="mt-3 md:mt-0 flex space-x-3 w-full justify-between pr-3">
                <img class="rounded-lg shadow-lg w-1/2" src="./assets/tracker-1.png" />
                <img class="rounded-lg shadow-lg w-1/2" src="./assets/tracker-2.png" />
              </div> -->
            </div>
          </Project>

          <Project title="Betting Game" icon="fi-rr-dice-alt">
            <div class="flex space-x-3">
              <div class="text-xs sm:text-sm">
                <Bullet>
                  In the process of developing a game mechanic that I devised,
                  based on the findings of a psychological study on human greed.
                </Bullet>
                <Bullet>
                  It takes advantage of the instant and feeless properties of the cryptocurrency Nano to enable players of the game to receive their winnings instantly.
                </Bullet>
                <Tags tags="Blazor, Docker, SignalR, ASP.NET REST API, Redis, RabbitMQ, Background Services" />
              </div>
            </div>
          </Project>

          <Project title="Trading Bot" icon="fi-rr-stats">
            <div class="flex space-x-3">
              <div class="text-xs sm:text-sm">
                <Bullet>
                  Developed a trading bot that interfaces with the Binance API
                  to enumerate all possible routes of trading pairs from one
                  ticker to another, to find the most lucrative route.
                </Bullet>
                <Tags tags=".NET, Vue JS" />
              </div>
            </div>
          </Project>

          <hr class="my-3" />
          <h3 class="pl-2 md:pl-4 font-bold text-xl sm:text-2xl text-gray-700 mt-4 mb-6">
            Qualifications / Awards
          </h3>

          <div class="px-2 md:px-4 flex mb-4 leading-6">
            <i class="fi fi-rr-diploma mr-3 text-sm sm:text-lg"></i>
            <div class="flex w-full justify-between text-xs md:text-sm">
              <div>
                <p class="font-semibold">
                  Microsoft Certified Solutions Developer
                </p>
                <p class="text-gray-500">(MCSD: Web Applications)</p>
              </div>
              <div class="text-gray-400 text-xs">
                <i class="fi fi-rr-calendar mr-1"></i>
                '17
              </div>
            </div>
          </div>

          <div class="px-2 md:px-4 flex mb-3 leading-6">
            <i class="fi fi-rr-trophy mr-3 text-sm sm:text-lg"></i>
            <div class="flex w-full justify-between text-xs md:text-sm">
              <div>
                <p class="font-semibold">
                  Shortlisted as 'Future Star: Developer'
                </p>
                <p class="text-gray-500">
                  at national Future Stars of Tech awards
                </p>
              </div>
              <div class="text-gray-400 text-xs">
                <i class="fi fi-rr-calendar mr-1"></i>
                '20
              </div>
            </div>
          </div>

           <hr class="my-3" />
          <h3 class="pl-2 md:pl-4 font-bold text-xl sm:text-2xl text-gray-700 mt-4 mb-6">
            Interests
          </h3>

          <div class="px-2 md:px-4 flex mb-4 leading-6">
            <div class="flex w-full justify-between text-xs md:text-sm">
                <p>Running, personal development, making ramen, transcribing music, jazz & bossa nova guitar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
