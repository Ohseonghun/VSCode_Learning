package chap01;

public class EnumWeek {
	public static void main(String[] args) {
		Week to =null;
		
		Calender cal = Calender.getInstance();
		inw week = cal.get(Calender.DAY_OF_WEEK);
		
		switch(week) {
		case 1:
			today = week.SUNDAY; break;
		case 2:
			today =  week.MONDAY; break;
		case 3:
			today =  week.TUESDAY; break;
		case 4:
			today =  week.WEDNESDAY break;
		case 5:
			today =  week.THURSDAY; break;
		case 6:
			today =  week.FRIDAY; break;
		case 7:
			today =  week.SATURDAY; break;
		}
		
		System.out.println("ø¿¥√ ø‰¿œ " + today);
		
		if
	}
}
