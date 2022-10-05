#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![calc_expr])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn calc_expr(expr: String) -> String {
    let res = calc_engine::calculate(expr.as_str()).unwrap();
    res.to_string()
}
