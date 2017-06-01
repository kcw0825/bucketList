<h3><b>Bucket List</b></h3>
</br>

<p>Good day, we are degree studens from Fakulti Teknologi Maklumat dan Komunikasi (FTMK), Universiti Teknikal Malaysia Melaka (UTeM).  This project is done under subject BITP3453 MOBILE APPLICATION DEVELOPMENT. Bucket List is a simple project which involved hybrid language in the mobile application development. Bucket List apps is developed to assists people to record all the tasks in their daily life.</p>

  </br><h2><b>Developers Team Members</b></h2>
  
  </br>

  <table>
  <tr>
  <th>MATRIC NO.</th>
  <th>NAME</th>
  </tr>
  <tr>
  <td>B031410139</td>
  <td>ANTHONY SEE CHIN SIONG</td>
  </tr>
  <tr>
  <td>B031410150</td>
  <td>KHOO CHEE WEI</td>
  </tr>
  <tr>
  <td>B031410232</td>
  <td>SHELLA SARAH DAUD</td>
  </tr>
  <tr>
  <td>B031510063</td>
  <td>TAN YONG HOR</td>
  </tr>
  <tr>
  <td>B031410180</td>
  <td>TOO YI HANG</td>
  </tr>

  </table>
  
  
  
  </br>
  <h2><b>Functionalities of Apps</b></h2>
  </br>
  <p><b>This apps provided with the functions stated below:</b></p>
  <ul>
 
  <br>
  <li>Add tasks into the bucket list.</li>
  <li>Finish tasks in the bucket list.</li>
  <li>Update tasks name from the bucket list.</li>
  <li>View completed tasks (History).</li>
  <li>Date & Time of tasks will automatic filled based on server date and time or from mobile if no internet access.</li>
  </ul>



  </br>
  <h2><b>How To Setup The Development Environment</b></h2>
  </br>
  
  <p>Before start writing the hybrid application, you need to setup your PC (for Window) :</p>
  
 <p>
 1)	Setup environment variable<br>
-	Right click to My Computer >> Properties >> Advance System Settings >> Environment Variable >> Choose Path and click Edit >> Add :<br>
-	;<your_sdkPath>\android-sdks\tools ;<your_sdkPath>\android-sdks\platform-tools<br>
-	Click OK >> Click Apply<br>
2)	Install Node.js<br>
-	Download the Node.js at https://nodejs.org/en/<br>
-	Run the node-v*.*.*.msi installer<br>
-	After installation finish, run command prompt (run as administrator) <br>
-	Run:  node –v. By right you should be getting the version of the Node.js <br>
3)	Install Cordova<br>
-	After successful Node installation, run:  npm install –g cordova<br>
-	Create a Cordova project folder by running: <br>
-	cordova create your_project_name<br>
-	cd your_project_name<br>
-	cordova platform add android<br>
4)	Install Ionic Framework<br>
-	npm install -g cordova ionic<br>
-	Mean while waiting for ionic installation to finish, sign up Ionic account at: https://creator.ionic.io/app/login<br>
5) Start an ionic project<br>
- Open up command prompt and navigate to the previous Cordova folder<br>
- Run: ionic start "projectName"<br>
- Run: cd "projectName"<br>
6) Add android platform into ionic project<br>
- Run: cordova platform add android<br>
- Run: cordova run android to build the application<br>
7) Add the logical process of SQLite<br>
- Run: npm install –g bower<br>
- Run: bower install ngCordova<br><br>
- Run: cordova plugin add cordova-sqlite-storage<br>
Now open the index.html and add the ng-cordova.min.js<br><br>


<-- cordova script (this will be a 404 during development) --><br>
    <script src="lib/ngCordova/dist/ng-cordova.min.js"></script><br>
    <script src="cordova.js"></script><br><br>

<b>You can start to build ionic project!!!</b><br>

 </p>

