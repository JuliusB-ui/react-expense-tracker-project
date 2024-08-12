export const App = () => {
  return (
    <div>
      <header>
        <logo>ExpenseTracker</logo>
        {window.screen.width < 1440? 
        <div><ul Transaction History>
          <li><button>All Expense</button></li>
          <li><button>All Income</button></li>
        </ul>      
        <div dropdown>
          <button>
            <img></img>
            name
            <svg></svg>
          </button>
          <div dropdown-menu>
            <a dropdown-item><svg></svg>Profile Settings</a>
            <a dropdown-item><svg></svg>Log out</a>
          </div>
        </div></div>
        :
        <div>
          <button burger></button>
          <div>
            <ul Transaction History>
              <li><button>All Expense</button></li>
              <li><button>All Income</button></li>
            </ul>      
            <div dropdown>
              <button>
                <img></img>
                name
                <svg></svg>
              </button>
              <div dropdown-menu>
                <a dropdown-item><svg></svg>Profile Settings</a>
                <a dropdown-item><svg></svg>Log out</a>
              </div>
            </div>
          </div>
        </div>
}
      </header>


      <main non-auth>
        <div>
          <img bgimgwrapper/>
          <img decorativetab/>
        </div>

        <div Welcome Page>
          <div>
            <h3>EXPENSE LOG</h3>
            <h1>Manage Your <span>Finances</span> Masterfully!</h1>
            <p>ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your financial world.</p>
            <ul Auth link>
              <button>Sign Up</button>
              <button>Sign In</button>
            </ul>
          </div>
          <div allUsers>
            <div images>
              <div><img/></div>
              <div><img/></div>
              <div><img/></div>
            </div>
            <div>
              <h2>1000 users +</h2>
              <p>Trusted by users for reliable expense tracking!</p>
            </div>
          </div>
        </div>

        <div Register Page>
          <h1>Sign Up</h1>
          <p>Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.</p>
          <form>
            <label htmlFor="name"><input id="name" type="name"/></label>
            <label htmlFor="email"> <input id="email" type="email"/></label>
            <label htmlFor="password"> <input id="password" type="password / text"/> <span><svg></svg></span></label>
            <button>Sign Up</button>
          </form>
          <p>Already have account? <a>Sign In</a></p>
        </div>
        <div Login Page>
          <h1>Sign In</h1>
          <p>Welcome back to effortless expense tracking! Your financial dashboard awaits.</p>
          <form>
              <label htmlFor="email"><input id="email" type="email" name="email"/></label>
              <label htmlFor="password"> <input id="password" type="password / text"/> <span><svg></svg></span></label>
              <button>Sign In</button>
          </form>
          <p>Don't have an account? <a>Sign Up</a></p>
        </div>
      </main>

      <main auth>
        <div Main Page>
          <div>
            <h1>Expense Log</h1>
            <p>Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips.</p>
            <div income total>
              <svg></svg>
              <div>
                <h4>Total Income</h4>
                <h3>amount</h3>
              </div>
            </div>
            <div expense total>
              <svg></svg>
              <div>
                <h4>Total Expense</h4>
                <h3>amount</h3>
              </div>
            </div>
            <div expenses category>
              <h4>Expenses categories</h4>
              <div>
              <piechart></piechart>
              <ul>
                expenses
              </ul>
              </div>
            </div>
          </div>
        <form>
          <div>
            <label htmlFor="expenseradio1"><input type="radio" name="expense" id="exepenseradio1" />
            Expense</label>
            <label htmlFor="incomeradio1"><input type="radio" name="income" id="incomeradio1" />
            Income</label>
          </div>
          <div>
            <label htmlFor="date1">Date<input type="date" name="date" id="date1"/><span><a><svg></svg></a></span></label>
            <label htmlFor="time1">Time<input type="time" name="time" id="time1" /><span><a><svg></svg></a></span></label>
          </div>
          <label htmlFor="category1">Category <select name="category" id="category1"></select></label>
          <label htmlFor="sum1"><input type="text" name="sum" id="sum1"/><span>currency</span></label>
          <label htmlFor="comment1"><input type="text" name="comment" id="comment" /></label>
          <button>Add</button>
        </form>

        </div>

        <div transaction history>
          <div expense>
            <div >
              <h1>All Expense</h1>
              <p>View and manage every transaction seamlessly! Your entire financial landscape, all in one place.</p>
              <div>
                <div income total>
                  <svg></svg>
                  <div>
                    <h4>Total Income</h4>
                    <h3>amount</h3>
                  </div>
                </div>
                <div expense total>
                  <svg></svg>
                  <div>
                    <h4>Total Expense</h4>
                    <h3>amount</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <input type="text" name="search" id="search" />
              <dateTimePicker/>
              <table>

              </table>
            </div>
          </div>
          <div income>
            <div >
              <h1>All Expense</h1>
              <p>View and manage every transaction seamlessly! Your entire financial landscape, all in one place.</p>
              <div>
                <div income total>
                  <svg></svg>
                  <div>
                    <h4>Total Income</h4>
                    <h3>amount</h3>
                  </div>
                </div>
                <div expense total>
                  <svg></svg>
                  <div>
                    <h4>Total Expense</h4>
                    <h3>amount</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <input type="text" name="search" id="search" />
              <dateTimePicker/>
              <table>

              </table>
            </div>
          </div>
        </div>

        <div popup>
          <span><svg>close</svg></span>
          <h2>Profile settings</h2>
          <div>
            <img src="" alt="" />
            <input type="file" name="uploadPhoto" id="upload" />
            <button>Remove</button>
          </div>
          <div>
            <select name="currency" id="curr">
              <option></option>
            </select>
            <input type="text" name="name" id="name" />
          </div>
          <button type="submit">Save</button>
        </div>
      </main>
    </div>
  );
};
