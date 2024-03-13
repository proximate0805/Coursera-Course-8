import tkinter as tk
from tkinter import messagebox
from datetime import datetime, timedelta

class Grocery:
    def __init__(self, name, quantity, expiration_date):
        self.name = name
        self.quantity = quantity
        self.expiration_date = expiration_date

class FridgeApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Fridge App")

        self.fridge = {'vegetables': [], 'meat': [], 'fruit': [], 'poultry': []}

        self.create_widgets()

    def create_widgets(self):
        # Labels
        self.label = tk.Label(self.root, text="Fridge App", font=('Helvetica', 16, 'bold'))
        self.label.grid(row=0, column=0, columnspan=3, pady=10)

        # Buttons
        self.add_button = tk.Button(self.root, text="Add Grocery", command=self.open_add_window)
        self.add_button.grid(row=1, column=0, padx=5, pady=5)

        self.edit_button = tk.Button(self.root, text="Edit Grocery", command=self.edit_grocery)
        self.edit_button.grid(row=1, column=1, padx=5, pady=5)

        self.delete_button = tk.Button(self.root, text="Delete Grocery", command=self.delete_grocery)
        self.delete_button.grid(row=1, column=2, padx=5, pady=5)

        # Listbox
        self.listbox = tk.Listbox(self.root, width=40, height=15)
        self.listbox.grid(row=2, column=0, columnspan=3, padx=5, pady=5)

    def open_add_window(self):
        self.add_window = tk.Toplevel(self.root)
        self.add_window.title("Add Grocery")

        tk.Label(self.add_window, text="Name:").grid(row=0, column=0)
        tk.Label(self.add_window, text="Quantity:").grid(row=1, column=0)
        tk.Label(self.add_window, text="Category:").grid(row=2, column=0)
        tk.Label(self.add_window, text="Expiration Date (YYYY-MM-DD):").grid(row=3, column=0)

        self.name_entry = tk.Entry(self.add_window)
        self.name_entry.grid(row=0, column=1)
        self.quantity_entry = tk.Entry(self.add_window)
        self.quantity_entry.grid(row=1, column=1)
        self.category_entry = tk.Entry(self.add_window)
        self.category_entry.grid(row=2, column=1)
        self.expiry_entry = tk.Entry(self.add_window)
        self.expiry_entry.grid(row=3, column=1)

        add_button = tk.Button(self.add_window, text="Add", command=self.add_grocery)
        add_button.grid(row=4, column=0, columnspan=2)

    def add_grocery(self):
        name = self.name_entry.get()
        quantity = self.quantity_entry.get()
        category = self.category_entry.get().lower()
        expiration_date = self.expiry_entry.get()

        try:
            quantity = int(quantity)
            expiration_date = datetime.strptime(expiration_date, "%Y-%m-%d")
        except ValueError:
            messagebox.showerror("Error", "Invalid quantity or date format.")
            return

        grocery = Grocery(name, quantity, expiration_date)
        self.fridge[category].append(grocery)
        self.update_listbox()
        self.add_window.destroy()

    def update_listbox(self):
        self.listbox.delete(0, tk.END)
        for category, groceries in self.fridge.items():
            for idx, grocery in enumerate(groceries, 1):
                self.listbox.insert(tk.END, f"{idx}. {grocery.name} - Quantity: {grocery.quantity}, Expiration Date: {grocery.expiration_date}")

    def edit_grocery(self):
        selection = self.listbox.curselection()
        if not selection:
            messagebox.showinfo("Edit Grocery", "Please select a grocery to edit.")
            return

        index = selection[0]
        grocery_text = self.listbox.get(index)
        grocery_name = grocery_text.split(" - ")[0][3:]

        for category, groceries in self.fridge.items():
            for grocery in groceries:
                if grocery.name == grocery_name:
                    self.edit_window = tk.Toplevel(self.root)
                    self.edit_window.title("Edit Grocery")

                    tk.Label(self.edit_window, text="Name:").grid(row=0, column=0)
                    tk.Label(self.edit_window, text="Quantity:").grid(row=1, column=0)
                    tk.Label(self.edit_window, text="Category:").grid(row=2, column=0)
                    tk.Label(self.edit_window, text="Expiration Date (YYYY-MM-DD):").grid(row=3, column=0)

                    self.edit_name_entry = tk.Entry(self.edit_window)
                    self.edit_name_entry.grid(row=0, column=1)
                    self.edit_quantity_entry = tk.Entry(self.edit_window)
                    self.edit_quantity_entry.grid(row=1, column=1)
                    self.edit_category_entry = tk.Entry(self.edit_window)
                    self.edit_category_entry.grid(row=2, column=1)
                    self.edit_expiry_entry = tk.Entry(self.edit_window)
                    self.edit_expiry_entry.grid(row=3, column=1)

                    self.edit_name_entry.insert(0, grocery.name)
                    self.edit_quantity_entry.insert(0, grocery.quantity)
                    self.edit_category_entry.insert(0, category)
                    self.edit_expiry_entry.insert(0, grocery.expiration_date.strftime("%Y-%m-%d"))

                    edit_button = tk.Button(self.edit_window, text="Edit", command=lambda: self.update_grocery(grocery))
                    edit_button.grid(row=4, column=0, columnspan=2)
                    return

    def update_grocery(self, grocery):
        name = self.edit_name_entry.get()
        quantity = self.edit_quantity_entry.get()
        category = self.edit_category_entry.get().lower()
        expiration_date = self.edit_expiry_entry.get()

        try:
            quantity = int(quantity)
            expiration_date = datetime.strptime(expiration_date, "%Y-%m-%d")
        except ValueError:
            messagebox.showerror("Error", "Invalid quantity or date format.")
            return

        grocery.name = name
        grocery.quantity = quantity
        grocery.expiration_date = expiration_date
        self.update_listbox()
        self.edit_window.destroy()

    def delete_grocery(self):
        selection = self.listbox.curselection()
        if not selection:
            messagebox.showinfo("Delete Grocery", "Please select a grocery to delete.")
            return

        index = selection[0]
        grocery_text = self.listbox.get(index)
        grocery_name = grocery_text.split(" - ")[0][3:]

        for category, groceries in self.fridge.items():
            for grocery in groceries:
                if grocery.name == grocery_name:
                    groceries.remove(grocery)
                    self.update_listbox()
                    messagebox.showinfo("Delete Grocery", f"{grocery_name} deleted successfully.")
                    return

def main():
    root = tk.Tk()
    app = FridgeApp(root)
    root.mainloop()

if __name__ == "__main__":
    main()