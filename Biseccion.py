import matplotlib.pyplot as plt
import pandas as pd

# Datos de la tabla
data = {
    "i": [1, 2, 3, 4, 5, 6, 7],
    "Xi": [-2, -1.5, -1.5, -1.5, -1.43, -1.5, -1.38],
    "Xs": [-1, -1, -1.25, -1.37, -1.37, -1.37, -1.37],
    "Xa": [-1.5, -1.25, -1.37, -1.432, -1.4, -1.382, -1.378],
    "Ea%": [2.09, 2.2, 2.09, 2.09, 2.07, 2.08, 2.09],
    "Et%": [6.76, 11.03, 2.49, 1.92, 1.78, 1.64, 1.92]
}

df = pd.DataFrame(data)
print(df)

# Gráfica de Errores
plt.figure(figsize=(8, 5))
plt.plot(df["i"], df["Ea%"], marker='o', label="Error Aproximado (Ea%)", color='blue')
plt.plot(df["i"], df["Et%"], marker='s', label="Error Verdadero (Et%)", color='red')
plt.xlabel("Iteraciones")
plt.ylabel("Error (%)")
plt.title("Evolución de los Errores")
plt.legend()
plt.grid()
plt.show()
