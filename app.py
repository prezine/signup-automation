from flask import Flask
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())

app = Flask(__name__)

@app.route('/')
def hello_world():
	#driver = webdriver.Chrome("/var/www/html/signup-automation/chromedriver")
	#driver.get("https://pastorchrisdigitallibrary.org/campaigns/gold/portal.php?username=cephzone3")
	#driver.find_element_by_xpath("//input[@name='fullname']").send_keys("precious tom")
	#driver.find_element_by_xpath("//input[@name='email']").send_keys("tomprezine@gmail.com")
	#driver.find_element_by_id("submit").click()

	firefox_options = webdriver.FirefoxOptions()
	driver = webdriver.Remote(
	    command_executor='http://www.example.com',
	    options=firefox_options
	)
	driver.get("http://www.google.com")
	driver.quit() 
	  