<template>
  <body :class="setDark">
  <noscript>
    <strong>We're sorry but {{htmlWebpackPlugin.options.title}} doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div class="container">
  <!--  START OF ASIDE   -->
    <aside :class="showMobile">
      <div class="top">
          <div class="logo">
            <img src="@/assets/logo.png" alt="Logo">
            <h2>EGA<span class="danger">TOR</span></h2>
          </div>
          <div class="close" id="close-btn" @click="showMobile = ''">
            <span class="material-icons-sharp">close</span>
          </div>
      </div>

        <div class="sidebar">
          <a href="#">
            <span class="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
          </a>

          <a href="#" class="active">
            <span class="material-icons-sharp">person_outline</span>
            <h3>Customers</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">receipt_long</span>
            <h3>Orders</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">insights</span>
            <h3>Analytics</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">mail_outline</span>
            <h3>Messages</h3>
            <span class="message-count">26</span>
          </a>

          <a href="#">
            <span class="material-icons-sharp">inventory</span>
            <h3>Products</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">report_gmailerrorred</span>
            <h3>Reports</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">settings</span>
            <h3>Settings</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">add</span>
            <h3>Add Product</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">logout</span>
            <h3>Logout</h3>
          </a>

        </div>
    </aside>
    <!--  END OF ASIDE  -->

    <!--  MAIN  -->
    <main>
      <h1>Dashboard</h1>

      <div class="date">
        <input type="date">
      </div>

      <div class="insights">

        <div class="sales">
          <span class="material-icons-sharp">analytics</span>
          <div class="middle">
            <div class="left">
              <h3>Total Sales</h3>
              <h1>$25,024</h1>
            </div>
            <div class="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div class="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small class="text-muted">Last 24 Hours</small>
        </div>
          <!--    END OF SALES      -->

          <div class="expenses">
            <span class="material-icons-sharp">bar_chart</span>
            <div class="middle">
              <div class="left">
                <h3>Total Expenses</h3>
                <h1>$14,160</h1>
              </div>
              <div class="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div class="number">
                  <p>62%</p>
                </div>
              </div>
            </div>
            <small class="text-muted">Last 24 Hours</small>
          </div>
            <!--    END OF EXPENSES      -->

            <div class="income">
              <span class="material-icons-sharp">stacked_line_chart</span>
              <div class="middle">
                <div class="left">
                  <h3>Total Income</h3>
                  <h1>$10,864</h1>
                </div>
                <div class="progress">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div class="number">
                    <p>44%</p>
                  </div>
                </div>
              </div>
              <small class="text-muted">Last 24 Hours</small>
            </div>
              <!--    END OF INCOME      -->

        </div>
        <!--   END OF INSIGHTS     -->

        <div class="recent-orders">
          <h2>Recent orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payments</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(order, key) in orderList" :key="key">
                <td>{{order.productName}}</td>
                <td>{{order.productNumber}}</td>
                <td>{{order.paymentStatus}}</td>
                <td :class="paymentStatusClass(order.shipping)">{{order.shipping}}</td>
                <td class="primary">Details</td>
              </tr>
            </tbody>
          </table>
          <a href="#">Show All</a>

        </div>

    </main>
    <!--  END OF MAIN  -->

    <div class="right">
      <div class="top">
        <button id="menu-btn" @click="showMobileMenu">
          <span class="material-icons-sharp">menu</span>
        </button>
        <div class="theme-toggle" @click="darkTheme">
          <span class="material-icons-sharp" :class="activeLight">light_mode</span>
          <span class="material-icons-sharp" :class="activeDark">dark_mode</span>
        </div>
        <div class="profile">
          <div class="info">
            <p>Hey, <b>Daniel</b></p>
            <small class="text-muted">Admin</small>
          </div>
          <div class="profile-photo">
            <img src="@/assets/profile-1.jpg" alt="Profile Photo">
          </div>
        </div>
      </div>
      <!--   END OF TOP   -->
      <div class="recent-updates">
        <h2>Recent Updates</h2>
        <div class="updates">
          <div class="update">
            <div class="profile-photo">
              <img src="@/assets/profile-2.jpg">
            </div>
            <div class="message">
              <p><b>Mike Tyson</b> received his order of Drone Mini</p>
              <small class="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div class="update">
            <div class="profile-photo">
              <img src="@/assets/profile-3.jpg">
            </div>
            <div class="message">
              <p><b>Diana Ayl</b> received his order of Drone Mini</p>
              <small class="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div class="update">
            <div class="profile-photo">
              <img src="@/assets/profile-4.jpg">
            </div>
            <div class="message">
              <p><b>Mary Poppins</b> received his order of Drone Mini</p>
              <small class="text-muted">2 Minutes Ago</small>
            </div>
          </div>
        </div>
      </div>
<!--  END RECENT UPDATES    -->
      <div class="sales-analytics">
        <h2>Sales Analytics</h2>
        <div class="item online">
          <div class="icon">
            <span class="material-icons-sharp">shopping_cart</span>
          </div>
          <div class="right">
            <div class="info">
              <h3>ONLINE ORDERS</h3>
              <small class="text-muted">Last 24 Hours</small>
            </div>
            <h5 class="success">+39%</h5>
            <h3>3849</h3>
          </div>
        </div>
        <div class="item offline">
          <div class="icon">
            <span class="material-icons-sharp">local_mall</span>
          </div>
          <div class="right">
            <div class="info">
              <h3>OFFLINE ORDERS</h3>
              <small class="text-muted">Last 24 Hours</small>
            </div>
            <h5 class="danger">-17%</h5>
            <h3>1100</h3>
          </div>
        </div>
        <div class="item customers">
          <div class="icon">
            <span class="material-icons-sharp">person</span>
          </div>
          <div class="right">
            <div class="info">
              <h3>NEW CUSTOMERS</h3>
              <small class="text-muted">Last 24 Hours</small>
            </div>
            <h5 class="success">+25%</h5>
            <h3>849</h3>
          </div>
        </div>
        <div class="item add-products">
          <div>
            <span class="material-icons-sharp">add</span>
            <h3>Add Product</h3>
          </div>
        </div>

      </div>
    </div>


  </div>
  </body>
</template>



<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => (
      {
        showMobile: "",
        setDark: "",
        activeLight: "active",
        activeDark: ""
      }
  ),
  methods: {
    showMobileMenu(){
      this.showMobile = "showmobile";
    },
    darkTheme(){
      if(this.setDark == ""){
        this.setDark = "dark-theme-variables";
        this.activeLight = "";
        this.activeDark = "active";
      }else{
        this.setDark = "";
        this.activeLight = "active";
        this.activeDark = "";
      }
    },
    paymentStatusClass(status){
      if(status === 'Declined'){
        return  'danger';
      }else if(status === 'Pending'){
        return 'warning';
      }else{
        return 'primary';
      }
    }
  },
  computed: {
    ...mapGetters('orders', {orderList: 'all'}),


  }
}
</script>


<style>

</style>