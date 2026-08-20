public class Book extends TangibleAsset{
	private String isbn;
	public Book(String name, int price, String color, String isbn){
		super();
		this.isbn = isbn;
	}
	public String getIsbn(){return this.isbn;}
}
