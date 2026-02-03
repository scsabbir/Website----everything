import calendar

try:
    year = int(input("Enter the year: "))
    cal = calendar.TextCalendar(calendar.SUNDAY)
    print(cal.formatyear(year))
except ValueError:
    print("Please enter a valid year.")
